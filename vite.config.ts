import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "univeristy-of-manitoba",
    project: "javascript-react"
  })],

  base: process.env.NODE_ENV === 'production' ? '/apple-iphone-clone/' : '/',

  build: {
    sourcemap: true
  },
})