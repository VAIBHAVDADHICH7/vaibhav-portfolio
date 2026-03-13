import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vaibhavdadhich.com',
  integrations: [
    react(),
    tailwind()
  ],
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  compressHTML: true,
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom', 'framer-motion']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion']
    }
  }
});
