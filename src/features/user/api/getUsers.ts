import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
const QUERY_USERS = 'users'
type User = {
  id: number
  name: string
}

export type Paginate = {
  total: number
  per_page: number
  current_page: number
  last_page: number
  // pageParam:
}

type UserReturnType = {
  data: User[]
} & Paginate

export type GetUsersProps = {
  page: number
}
const getUsers = async ({ page }: GetUsersProps): Promise<UserReturnType> => {
  const params = {
    page: page,
  }
  const { data } = await axios.get('/users', { params })
  return data
}
export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>

type QueryFnType = typeof getUsers
export const useUsers = () => {
  // https://tanstack.com/query/v4/docs/reference/useInfiniteQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useInfiniteQuery#_top
  // getNextPageParam: queryFnのpageParamを取得する
  // hasNextPage: getNextPageParamでpageParamが更新されたらtrue,undefinedのときfalse
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>(
    [QUERY_USERS],
    ({ pageParam = 1 }) => getUsers({ page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.current_page < lastPage.last_page ? lastPage.current_page + 1 : undefined
      },
    },
  )
}
