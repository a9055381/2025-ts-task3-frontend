import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //   },
    //   output: {
    //     dir: resolve(__dirname, 'dist'),
    //   },
    // },
    outDir: 'dist', // 打包到專案內的 dist/
    emptyOutDir: true, // 每次 build 前清空 dist
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['mixed-decls', 'import', 'color-functions', 'global-builtin'],
        verbose: false,
      },
    },
  },
})
