import { defineConfig,loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL} from "node:url"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  return {
    // 使用环境变量
    base: mode === 'production' ? '/vue-school-travel-app/' : '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [vue()],
  }
})