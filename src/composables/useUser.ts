import { useMutation } from '@pinia/colada'
/**
 * Example mutation composable
 */
export function useCreateUser() {

  return useMutation({
    mutation: async (variables: { name: string; email: string }) =>
    ({
      errors: [
        {
          message: "User creation is disabled in mock mode.",
          locations: [
            {
              "line": 3,
              "column": 3
            }
          ],
          path: [
            "createUser"
          ]
        }
      ],
      data: null
    }),
    onSuccess: () => {
      console.log('User created successfully')
    },
  })
}
