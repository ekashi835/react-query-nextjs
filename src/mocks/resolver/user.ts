import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw'

import mockData from '../data'

type ReturnType = ResponseResolver<RestRequest<never, PathParams<string>>, RestContext>

const users: ReturnType = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockData.users))
}


const mockUser = {
  users,
}

export default mockUser
