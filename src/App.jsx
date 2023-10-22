import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Card } from './components/Card'

function App() {
  const users = [
    {
      id: 1,
      name: 'Panchito Gomez Toro',
      username: '@panchito',
      following: false,
    },
    {
      id: 2,
      name: 'Pedro Pica Piedra',
      username: '@pedrito',
      following: false,
    },
    {
      id: 3,
      name: 'Alberto El Militar',
      username: '@albe',
      following: true,
    },
  ]

  const updateUser = (user) => {
    const target = users.find(item => item.id === user.id)
    target.following = !user.following
    console.log('target', target);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
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
