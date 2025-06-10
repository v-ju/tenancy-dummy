import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/v1': {
        target:`http://localhost:3000`,
        changeOrigin: true,      
        secure: false, 
      }  
    }
  }
})
