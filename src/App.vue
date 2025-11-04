<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-950">
    <div class="text-center space-y-12 p-8">
      <!-- Logos -->
      <div class="flex items-center justify-center gap-12">
        <a
          href="https://vite.dev"
          target="_blank"
          class="block transition-transform hover:-translate-y-2 duration-300"
        >
          <img
            src="/vite.svg"
            class="h-32 hover:drop-shadow-[0_0_3rem_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://vuejs.org/"
          target="_blank"
          class="block transition-transform hover:-translate-y-2 duration-300"
        >
          <img
            src="./assets/vue.svg"
            class="h-32 hover:drop-shadow-[0_0_3rem_#42b883aa]"
            alt="Vue logo"
          />
        </a>
      </div>

      <!-- Content -->
      <HelloWorld msg="Vite + Vue" />
    </div>
  </div>
</template>
