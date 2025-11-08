import { useMutation } from '@pinia/colada'
import { $sdk } from '../graphql/default/ofetch'
/**
 * Example mutation composable
 */
export function useCreateUser() {

  return useMutation({
    mutation: async (variables: { name: string; email: string }) => {
      const result = await $sdk.createUser({
        input: {
          name: variables.name,
          email: variables.email,
        },
      })
      return result.data.createUser
    },
    onSuccess: () => {
      console.log('User created successfully')
    },
  })
}
