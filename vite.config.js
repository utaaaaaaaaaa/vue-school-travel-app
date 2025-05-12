import { defineConfig,loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL} from "node:url"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  // 动态基础路径配置
  const base = mode === 'production'
      ? '/vue-school-travel-app/'
      : '/'

  return {
    // 使用环境变量
    base: base,
    publicDir: 'public',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [vue()],
  }
})