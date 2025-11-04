<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-5xl font-bold text-white">{{ msg }}</h1>

    <div class="space-y-4">
      <button
        type="button"
        @click="count++"
        class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-blue-500/50"
      >
        count is {{ count }}
      </button>
      <p class="text-gray-400">
        Edit
        <code class="px-2 py-1 bg-gray-800 rounded text-sm text-emerald-400">components/HelloWorld.vue</code>
        to test HMR
      </p>
    </div>

    <div class="space-y-3 text-gray-300">
      <p>
        Check out
        <a
          href="https://vuejs.org/guide/quick-start.html#local"
          target="_blank"
          class="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-4"
        >
          create-vue
        </a>, the official Vue + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-blue-400 hover:text-blue-300 underline decoration-dotted underline-offset-4"
        >
          Vue Docs Scaling up Guide
        </a>.
      </p>
      <p class="text-gray-500 text-sm">
        Click on the Vite and Vue logos to learn more
      </p>
    </div>
  </div>
</template>
