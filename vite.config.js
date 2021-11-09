import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js']
  },
  plugins: [
    vue(),
    WindiCSS()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "~@style/mixin.scss";
        @import "~@style/variable.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~@assets': resolve(__dirname, './src/assets'),
      '~@comp': resolve(__dirname, './src/components'),
      '~@utils': resolve(__dirname, './src/utils'),
      '~@img': resolve(__dirname, './src/assets/img'),
      '~@style': resolve(__dirname, './src/style'),
      '~@views': resolve(__dirname, './src/views')
    }
  }
})
