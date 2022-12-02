import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw'

import mockData from '../data'

type ReturnType = ResponseResolver<RestRequest<never, PathParams<string>>, RestContext>

const getUsers: ReturnType = (req, res, ctx) => {
  const page = req.url.searchParams.get('page')

  const per_page = 10
  const users = mockData.users.slice((Number(page) - 1) * per_page, Number(page) * per_page)

  const ret = {
    data: users,
    current_page: Number(page),
    last_page: mockData.users.length / per_page,
  }
  return res(ctx.status(200), ctx.json(ret))
}

const getUser: ReturnType = (req, res, ctx) => {
  const ret = mockData.users.find((user) => user.id === Number(req.params.id))
  return res(ctx.status(200), ctx.json(ret))
}

const mockUser = {
  getUsers,
  getUser,
}

export default mockUser
