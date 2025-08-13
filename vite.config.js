// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: process.env.VITE_BASE || '/',  <-- elimínalo o cámbialo a '/'
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
  },
})
