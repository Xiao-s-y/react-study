import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 匹配请求前缀 /api
      '/api': {
        target: 'https://api.github.com', // 真实github接口域名
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 将请求路径开头/api替换为空字符串
      }
    }
  }
})
