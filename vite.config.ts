import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { graphql } from 'nitro-graphql/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    graphql({
      framework: 'graphql-yoga',
      scaffold: false,
      paths: {
        serverGraphql: 'server/graphql',
      },
    }),
    nitro(),
    vue(),
  ],
  nitro: {
    preset: "standard",
    serverDir: "server"
  },
});
