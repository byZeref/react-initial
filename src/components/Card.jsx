import '../assets/styles/card.scss'
import { useState } from 'react'

export function Card({ user, updateUser }) {

  const { first_name, last_name, email, avatar, following } = user
  const [ isFollowing, setIsFollowing ] = useState(following)
  
  const btnText = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClass = isFollowing ? 'follow-btn following' : 'follow-btn'
  
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
    updateUser(user.id, !isFollowing)
  }

  
  return (
    <div className="card">
      <img src={avatar} alt="user image" />
      <div className='text'>
        <span>{ `${first_name} ${last_name}` }</span>
        <span>{ email }</span>
      </div>
      <button className={btnClass} onClick={handleClick} >
        <span className='text'>{ btnText }</span>
        <span className='stopFollow'>Dejar de seguir</span>
      </button>
    </div>
  )

}