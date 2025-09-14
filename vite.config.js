import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          utils: ['axios', 'react-toastify']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: true, // listen on 0.0.0.0 for stable emulation/mobile view
    port: 5173,
    strictPort: true,
    cors: true,
    hmr: {
      host: 'localhost',
      port: 5173,
      clientPort: 5173,
      protocol: 'ws',
      overlay: true,
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
})
