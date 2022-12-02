import { renderHook, screen, waitFor } from '@testing-library/react'
import { useUsers } from './getUsers'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockUser from '@/mocks/resolver/user'
import { QueryClientProvider } from '@/provider/QueryClientProvider'

// mockサーバー
const mockServer = setupServer(rest.get('/users', mockUser.getUsers))

const wrapper = QueryClientProvider

describe('Users', () => {
  beforeAll(() => {
    mockServer.listen()
  })
  afterAll(() => {
    mockServer.close()
  })
  test('データ取得 ', async () => {
    const { result } = renderHook(() => useUsers(), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    const data = result.current.data

    expect(data).toBeTruthy()
    // const data = result.current.data
    console.log({ data })
    const users = data?.pages[0]
    expect(users).toHaveLength(100)
    // const { result } = renderHook(() => useUsers(), { wrapper })
    // await waitFor(() => expect(result.current.isSuccess).toBe(true))

    // const listHead = data?.shift()
    // expect(listHead).toMatchObject({ id: 1 })
  })
})
