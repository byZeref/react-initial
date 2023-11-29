import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { loadUsers } from './services/users'

function App() {

  const [ users, setUsers ] = useState([])
  const [ followingAll, setFollowingAll ] = useState(false)

  const load = async () => {
    const data = await loadUsers()
    setUsers([...data])
  }

  const checkFullFollow = () => {
    setFollowingAll(users.every(item => item.following === true))
  }

  const updateUser = (user_id, follow) => {
    const target = users.find(item => item.id === user_id)
    target.following = follow
    console.log(users);
    checkFullFollow()
  }
  
  useEffect(() => {
    console.log('following all', followingAll)
    followingAll && confetti()
  }, [followingAll])


  

  useEffect(() => { load() }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      { users.map((user) => 
        (
          <Card
            key={user.id}
            updateUser={updateUser}
            user={user}
          />
        )
      )}
    </div>
  )
}

export default App
