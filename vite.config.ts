import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { graphql } from 'nitro-graphql/vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    nitro(),
    graphql({
      framework: 'graphql-yoga',
      scaffold: false,
      paths: {
        serverGraphql: 'server/graphql',
        clientGraphql: 'src/graphql',
      },
    }),
    vue(),
  ],
  nitro: {
    preset: "standard",
    serverDir: "server"
  },
});
