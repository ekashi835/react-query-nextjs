import { render, screen, waitFor } from '@testing-library/react'
import { Users } from './Users'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockUser from '@/mocks/resolver/user'
import { QueryClientProvider } from '@/provider/QueryClientProvider'

// mockサーバー
const mockServer = setupServer(rest.get('/users', mockUser.getUsers))

describe('Users', () => {
  beforeAll(() => {
    mockServer.listen()
  })
  afterAll(() => {
    mockServer.close()
  })
  // test('タイトル表示', async () => {
  //   render(<Users />, { wrapper: QueryClientProvider })

  //   await waitFor(() => {
  //     const heading = screen.getByRole('heading', {
  //       name: 'Users',
  //     })
  //     expect(heading).toBeInTheDocument()
  //   })
  // })
  test('ユーザー一覧表示', async () => {
    render(<Users />, { wrapper: QueryClientProvider })

    await waitFor(() => screen.findByText('user1'))
  })
})
