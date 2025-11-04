import { defineRoute } from 'nitro/h3'

export default () => defineRoute({
  method: 'GET',
  route: '/api/hello',
  handler: async (event) => {
    return 'Hello, World!'
  },
})
