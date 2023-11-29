export const loadUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .catch(e => console.error('error on get users', e))

  return res.data
}