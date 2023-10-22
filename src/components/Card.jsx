import '../assets/styles/card.scss'
import { useState, useEffect } from 'react'

export function Card({ updateUser, user }) {
  const { name, username, following } = user
  const [ isFollowing, setIsFollowing ] = useState(following)
  
  const btnText = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClass = isFollowing ? 'follow-btn following' : 'follow-btn'
  const [ text, setText ] = useState(btnText)
  
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
    setText(isFollowing ? 'Seguir' : 'Siguiendo')
    updateUser(user)
  }
  const handleOver = () => {
    setText(isFollowing ? 'Dejar de seguir' : 'Seguir')
  }
  const handleLeave = () => {
    setText(isFollowing ? 'Siguiendo' : 'Seguir')
  }

  
  return (
    <div className="card">
      <img src="avatar.jpg" alt="user image" />
      <div className='text'>
        <span>{ name }</span>
        <span>{ username }</span>
      </div>
      <button className={btnClass} onClick={handleClick} onMouseEnter={handleOver} onMouseLeave={handleLeave}>
        <span>{ text }</span>

        {/* <span className='text'>{ btnText }</span>
        <span className='stopFollow'>Dejar de seguir</span> */}
      </button>
    </div>
  )
}