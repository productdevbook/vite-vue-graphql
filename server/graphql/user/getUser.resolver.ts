import { defineQuery } from "nitro-graphql/utils/define";
import { mockUsers } from "./userStore";

import { HTTPError } from 'nitro/h3'

export const data = defineQuery({
  getUser: (_parent, args, ctx) => {

    // throw new HTTPError('Not implemented', { statusCode: 401 })
    const user = mockUsers.find(u => u.id === args.id);
    return user || null;
  },
})