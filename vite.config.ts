import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/path-to-truth/',
  plugins: [react()],
})
