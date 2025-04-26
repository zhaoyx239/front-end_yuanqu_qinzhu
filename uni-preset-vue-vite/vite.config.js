import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  server: {
    proxy: {
      '/api/': {
        target: 'http://47.117.104.180/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\//, '') // 把开头的 /api 去掉
      }
    }
  }
})
