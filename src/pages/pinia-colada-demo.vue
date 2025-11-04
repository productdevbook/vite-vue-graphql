<script setup lang="ts">
import { useQuery, useMutation } from '@pinia/colada'
import { $sdk } from '../graphql/default/ofetch'

// Query example - automatic loading, error, and data management
const { data: user, isLoading, error, refetch } = useQuery({
  key: ['user'],
  query: async () => {
    const result = await $sdk.test()
    if (result.errors) {
      throw new Error(result.errors[0].message)
    }
    return result.data?.getUser
  },
  // Optional: auto-refetch on window focus
  refetchOnWindowFocus: true,
  // Optional: stale time
  staleTime: 5000,
})

// Mutation example (for future use)
const { mutate: updateUser, isPending: isUpdating } = useMutation({
  mutation: async (variables: { name: string }) => {
    // Your mutation logic here
    console.log('Updating user:', variables)
    return variables
  },
  onSuccess: () => {
    // Invalidate and refetch user data
    refetch()
  },
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 p-8">
    <div class="max-w-2xl mx-auto space-y-8">
      <div>
        <router-link
          to="/"
          class="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Home
        </router-link>
      </div>

      <h1 class="text-4xl font-bold text-white">Pinia Colada Demo</h1>

      <div class="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 class="text-xl font-semibold text-white mb-4">
          GraphQL with Pinia Colada
        </h2>

        <!-- Loading State -->
        <div v-if="isLoading" class="text-gray-400">
          <div class="flex items-center gap-2">
            <div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            Loading user data...
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-red-400 p-4 bg-red-900/20 rounded">
          Error: {{ error.message }}
        </div>

        <!-- Success State -->
        <div v-else-if="user" class="space-y-4">
          <div class="space-y-2 text-gray-300">
            <p><span class="text-gray-400">ID:</span> {{ user.id }}</p>
            <p><span class="text-gray-400">Name:</span> {{ user.name }}</p>
            <p><span class="text-gray-400">Email:</span> {{ user.email }}</p>
          </div>

          <button
            @click="() => refetch()"
            class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors duration-200"
          >
            Refresh
          </button>
        </div>
      </div>

      <!-- Comparison Info -->
      <div class="p-6 bg-blue-900/20 rounded-lg border border-blue-700">
        <h3 class="text-lg font-semibold text-blue-300 mb-2">
          Pinia Colada Advantages
        </h3>
        <ul class="text-gray-300 space-y-2 list-disc list-inside">
          <li>Automatic loading, error, and data state management</li>
          <li>Caching and deduplication</li>
          <li>Auto-refetch (window focus, interval, etc.)</li>
          <li>Optimistic updates support</li>
          <li>Query invalidation and refetching</li>
          <li>TypeScript support</li>
          <li>Less boilerplate code</li>
        </ul>
      </div>
    </div>
  </div>
</template>
