import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'framer-motion',
        'react-bootstrap',
        '@mui/material',
        '@mui/icons-material/KeyboardDoubleArrowDown',
        'react-globe.gl',
        '@mui/lab/Timeline'
      ]
    },
    optimizeDeps: {
      include: ['framer-motion', 'react-bootstrap','@mui/material','@mui/icons-material/KeyboardDoubleArrowDown','react-globe.gl', '@mui/lab/Timeline'],
    },
  },
})
