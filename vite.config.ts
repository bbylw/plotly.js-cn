import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [tailwindcss()],
  server: {
    port: 5200,
    host: true,
  },
  optimizeDeps: {
    include: ['plotly.js-dist-min'],
  },
})
