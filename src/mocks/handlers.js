import { rest } from 'msw'

import mockUser from './resolver/user'


export const handlers = [
  rest.get('/users', mockUser.users)
]


