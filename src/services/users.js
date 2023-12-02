export const loadUsers = async () => {
  const url = import.meta.env.VITE_API_URL
  
  const { data } = await fetch(`${url}/users`)
    .then(res => res.json())
    .catch(e => console.error('error on get users', e))

  return data
}