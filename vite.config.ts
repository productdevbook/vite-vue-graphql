import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { graphql } from 'nitro-graphql/vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    nitro(),
    graphql({
      framework: 'graphql-yoga',
      scaffold: false,
      paths: {
        serverGraphql: 'server/graphql',
      },
    }),
    vue(),
    tailwindcss(),
  ],
  nitro: {
    preset: "standard",
    serverDir: "server"
  },
});
