import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { seoBuildPlugin } from './plugins/seoBuildPlugin'
import { getPrerenderRoutes } from './src/config/seo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoBuildPlugin(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: resolve(__dirname, 'src/prerender.tsx'),
      additionalPrerenderRoutes: getPrerenderRoutes().filter((route) => route !== '/'),
    }),
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet-vendor': ['react-helmet-async'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
})
