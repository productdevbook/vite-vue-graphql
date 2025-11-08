import { defineMutation } from "nitro-graphql/utils/define";
import { mockUsers } from "./userStore";
import { GraphQLError } from "graphql/error/GraphQLError";

export const data = defineMutation({
  createUser: (_parent: unknown, args: { input: { email: string; name?: string } }) => {

     throw new GraphQLError("User creation is disabled in mock mode.");
    const newUser = {
      id: String(mockUsers.length + 1),
      email: args.input.email,
      name: args.input.name,
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);
    return newUser;
  },
})
