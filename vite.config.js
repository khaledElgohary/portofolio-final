import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'bootstrap/dist/css/bootstrap.css',
        'framer-motion',
        'react-bootstrap',
        '@mui/material'
      ]
    },
    optimizeDeps: {
      include: ['framer-motion', 'bootstrap/dist/css/bootstrap.css', 'react-bootstrap','@mui/material'],
    },
  },
})
