import { useState, useEffect } from "react"
import { loadUsers } from "../services/users"

export const useUsers = () => {
  const [users, setUsers] = useState([])

  const load = async () => {
    const data = await loadUsers()
    setUsers([...data])
  }

  useEffect(() => load, [])
  return { users }
}