<script setup lang="ts">
import { ref } from 'vue'
import { useCreateUser } from './composables/useUser'

// Form fields
const userName = ref('')
const userEmail = ref('')

// Use the mutation composable
const { mutate, status, error, data, reset } = useCreateUser()

// Test user suggestions
const testUsers = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
  { name: 'Bob Johnson', email: 'bob@example.com' },
]

function fillForm(name: string, email: string) {
  userName.value = name
  userEmail.value = email
  reset() // Reset mutation state when filling form
}

function handleSubmit() {
  if (!userName.value || !userEmail.value) {
    return
  }

  mutate({
    name: userName.value,
    email: userEmail.value,
  })
}

function resetForm() {
  userName.value = ''
  userEmail.value = ''
  reset() // Reset mutation state
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <div>
        <router-link
          to="/"
          class="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Home
        </router-link>
      </div>

      <div>
        <h1 class="text-4xl font-bold text-white mb-2">
          Create User Mutation Demo
        </h1>
        <p class="text-gray-400">
          Pinia Colada mutation example with useCreateUser
        </p>
      </div>

      <!-- Quick Fill Suggestions -->
      <div class="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 class="text-xl font-semibold text-white mb-4">
          Quick Fill Test Users
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            v-for="user in testUsers"
            :key="user.email"
            @click="fillForm(user.name, user.email)"
            class="p-4 rounded-lg border-2 border-gray-600 bg-gray-900/30 hover:border-gray-500 text-left transition-all"
          >
            <div class="font-semibold text-white">{{ user.name }}</div>
            <div class="text-sm text-gray-400 mt-1">{{ user.email }}</div>
          </button>
        </div>
      </div>

      <!-- Create Form -->
      <div class="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 class="text-xl font-semibold text-white mb-4">
          Create User
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="userName" class="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              id="userName"
              v-model="userName"
              type="text"
              required
              class="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user name"
            />
          </div>

          <div>
            <label for="userEmail" class="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="userEmail"
              v-model="userEmail"
              type="email"
              required
              class="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user email"
            />
          </div>

          <div class="flex gap-3">
            <button
              type="submit"
              :disabled="!userName || !userEmail"
              class="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Create User
            </button>
            <button
              type="button"
              @click="resetForm"
              class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <!-- Mutation Status -->
      <div class="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 class="text-xl font-semibold text-white mb-4">
          Mutation Status
        </h2>

        <!-- Error State -->
        <div v-if="status === 'error'" class="text-red-400 p-4 bg-red-900/20 rounded-lg">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">❌</span>
            <h3 class="text-lg font-semibold text-red-300">Error</h3>
          </div>
          <div class="space-y-2 text-gray-300">
            <p><span class="text-gray-400">Message:</span> {{ error?.message }}</p>
          </div>
        </div>

        <!-- Success State -->
        <div v-else-if="status === 'success' && data" class="p-4 bg-green-900/20 border border-green-700 rounded-lg">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">✅</span>
            <h3 class="text-lg font-semibold text-green-300">User Created Successfully</h3>
          </div>
          <div class="space-y-2 text-gray-300">
            <p><span class="text-gray-400">ID:</span> <span class="font-mono">{{ data.id }}</span></p>
            <p><span class="text-gray-400">Name:</span> {{ data.name }}</p>
            <p><span class="text-gray-400">Email:</span> {{ data.email }}</p>
          </div>
        </div>

        <!-- Idle State -->
        <div v-else class="text-gray-400 text-center py-8">
          <p>Fill in the form and click "Create User" to test the mutation</p>
        </div>
      </div>

      <!-- Pattern Explanation -->
      <div class="p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
        <h3 class="text-lg font-semibold text-blue-300 mb-3">
          📝 Mutation Pattern
        </h3>
        <div class="bg-black/50 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre class="text-gray-300"><span class="text-gray-500">// Import the mutation composable</span>
<span class="text-purple-400">import</span> { useCreateUser } <span class="text-purple-400">from</span> <span class="text-green-400">'@/composables/useUser'</span>

<span class="text-gray-500">// Use in component</span>
<span class="text-purple-400">const</span> { mutate, status, error, data } = <span class="text-yellow-300">useCreateUser</span>()

<span class="text-gray-500">// Call mutation</span>
<span class="text-yellow-300">mutate</span>({
  name: <span class="text-green-400">'John Doe'</span>,
  email: <span class="text-green-400">'john@example.com'</span>
})</pre>
        </div>
      </div>
    </div>
  </div>
</template>
