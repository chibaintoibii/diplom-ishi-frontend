import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
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