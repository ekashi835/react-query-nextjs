import { renderHook, screen, waitFor } from '@testing-library/react'
import { useUser } from './getUser'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockUser from '@/mocks/resolver/user'
import { QueryClientProvider } from '@/provider/QueryClientProvider'

// mockサーバー
const mockServer = setupServer(rest.get('/users/:id', mockUser.getUser))

const wrapper = QueryClientProvider

describe('Users', () => {
  beforeAll(() => {
    mockServer.listen()
  })
  afterAll(() => {
    mockServer.close()
  })
  test('データ取得 - 指定したのIDのデータを取得できる ', async () => {
    const id = 2
    const { result } = renderHook(() => useUser({ id }), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    const data = result.current.data
    expect(data).toBeTruthy()
    expect(data?.id).toBe(id)
  })
})
