import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { useUsers } from './hooks/useUsers'
import { useCheckGift } from './hooks/useCheckGift'

function App() {

  const { users } = useUsers() // <--- CUSTOM HOOK
  const { followingAll, checkFullFollow } = useCheckGift(users) // <--- CUSTOM HOOK
  let headerText = followingAll ? 'Felicidades!!!' : 'Sigue a todos para obtener un premio'

  const updateUser = (user_id, follow) => {
    const target = users.find(item => item.id === user_id)
    target.following = follow
    console.log(users);
    checkFullFollow()
  }

  useEffect(() => {
    users.length > 0 && console.log('now we can send next request')
  }, [users])

  return (
    <main>
      { !users.length && <h4>Loading users...</h4> }
      { users.length > 0 && 
        <section style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <h3 style={{textAlign: 'center'}}>{headerText}</h3>
          {users.map((user) =>
          (
            <Card
              key={user.id}
              updateUser={updateUser}
              user={user}
            />
          )
        )}
        </section>
      }
    </main>
  )
}

export default App
