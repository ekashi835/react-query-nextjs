import { useEffect, useState } from 'react'
import axios from 'axios'

type User = {
  id: number
  name: string
}

export const Users = () => {
  const [user, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/users')
      setUsers(data)
    }
    fetch()
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Users</h1>
      {user && user.map((user) => <div key={user.id}>{user.name}</div>)}
    </>
  )
}
