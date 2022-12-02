import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
const QUERY_USERS = 'users'

type User = {
  id: number
  name: string
}
const getUser = async ({ id }: { id: number }): Promise<User> => {
  const { data } = await axios.get(`/users/${id}`)
  return data
}

type UseUserProps = {
  id: number
}
export const useUser = ({ id }: UseUserProps) => {
  return useQuery([QUERY_USERS], () => getUser({ id }))
}
