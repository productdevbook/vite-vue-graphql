import { useQuery, useMutation } from '@pinia/colada'
import { $sdk } from '../graphql/default/ofetch'

/**
 * Reusable composable for user data
 * Example of reusable query composable with Pinia Colada
 */
export function useUser() {
  const { data: user, isLoading, error, refetch } = useQuery({
    key: ['user'],
    query: async () => {
      const result = await $sdk.test()
      if (result.errors) {
        throw new Error(result.errors[0].message)
      }
      return result.data?.getUser
    },
    staleTime: 5000,
  })

  return {
    user,
    isLoading,
    error,
    refetch,
  }
}

/**
 * Example mutation composable
 */
export function useUpdateUser() {
  return useMutation({
    mutation: async (variables: { id: string; name: string }) => {
      // GraphQL mutation will be done here
      console.log('Update user:', variables)
      return variables
    },
    onSuccess: () => {
      console.log('User updated successfully')
    },
  })
}
