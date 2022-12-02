import { rest } from 'msw'

import mockUser from './resolver/user'

export const handlers = [
  rest.get('/users', mockUser.getUsers),
  rest.get('/users/:id', mockUser.getUser),
]
