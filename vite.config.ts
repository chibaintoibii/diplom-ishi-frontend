import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

import * as path from 'path'
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath( new URL( './src', import.meta.url ) )
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 5173,
    strictPort: true
  },
  preview: {
    port: 8888,
    strictPort: true
  },

});