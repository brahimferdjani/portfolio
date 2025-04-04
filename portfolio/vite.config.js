import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression({ algorithm: 'brotliCompress' })],
  base: "/", // Ensures correct asset paths
  build: {
    outDir: "dist",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./variables.scss";`, // If needed
        },
      },
    },
  },
})

