const users = [...Array(100)].map((_, i) => ({ id: i + 1, name: `user${i + 1}` }))

const mockData = {
  users,
}

export default mockData
