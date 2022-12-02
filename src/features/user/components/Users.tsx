import { useEffect, useState } from 'react'
import axios from 'axios'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { useUsers } from '@/features/user/api/getUsers'

export const Users = () => {
  // const { isLoading, data: users } = useUsers()
  const { isLoading, data: users, hasNextPage, fetchNextPage } = useUsers()

  if (isLoading) return <p>Loading...</p>
  console.log({ users })
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Users</h1>
      {users &&
        users.pages.map((page) =>
          page.data.map((user) => <div key={user.id}>{user.name}</div>),
        )}{' '}
      {hasNextPage && (
        <div className='flex justify-center'>
          <button type='button' onClick={() => fetchNextPage()}>
            もっと見る
          </button>
        </div>
      )}
      {/* {users && users.pages.map((user) => <div key={user.id}>{user.name}</div>)} */}
    </>
  )
}
