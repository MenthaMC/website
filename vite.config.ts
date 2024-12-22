import {defineConfig, loadEnv} from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { prismjsPlugin } from 'vite-plugin-prismjs'

// https://vite.dev/config/
export default () => {
  const env = loadEnv("default", process.cwd());
  const host = Number.parseInt(env.VITE_SERVER_PORT);
  const port = env.VITE_SERVER_HOST;

  return defineConfig({
    plugins: [
      vue(),
      prismjsPlugin({
        languages: 'all',
        plugins: ['line-numbers','show-language','copy-to-clipboard','inline-color'],
        css: true,
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
    },
    server: {
      port: host,
      host: port,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    preview: {
      port: host,
      host: port,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    }
  })
}
