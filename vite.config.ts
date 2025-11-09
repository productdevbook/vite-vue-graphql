import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    nitro(),
    vue(),
  ],
  nitro: {
    preset: process.env.NITRO_PRESET || "node-server",
    serverDir: "server"
  },
});
