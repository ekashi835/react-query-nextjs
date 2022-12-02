import { render, screen, waitFor } from '@testing-library/react'
import { Users } from './Users'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockUser from '@/mocks/resolver/user'

// mockサーバー
const mockServer = setupServer(rest.get('/users', mockUser.users))

describe('Users', () => {
  beforeAll(() => {
    mockServer.listen()
  })
  afterAll(() => {
    mockServer.close()
  })
  test('タイトル表示', () => {
    render(<Users />)

    const heading = screen.getByRole('heading', {
      name: 'Users',
    })

    expect(heading).toBeInTheDocument()
  })
  test('ユーザー一覧表示', async () => {
    render(<Users />)

    await waitFor(() => screen.findByText('user01'))
  })
})
