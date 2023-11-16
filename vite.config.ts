/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'

import {defineConfig, ConfigEnv, loadEnv} from 'vite'
import {configDefaults} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
import basicSsl from '@vitejs/plugin-basic-ssl'
import PackageJSON from './package.json'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  console.log(`defineConfig ~ env:`, env)

  return {
    base: env.VITE_APP_BASE_URL,
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
    define: {
      __APP_VERSION__: JSON.stringify(PackageJSON.version),
    },
    plugins: [
      vue(), //
      vueJsx(),
      UnoCSS(),
      basicSsl(),
      legacy({
        targets: PackageJSON.browserslist,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
      devSourcemap: true,
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: 3,
            browsers: PackageJSON.browserslist,
            autoprefixer: {
              grid: true,
            },
            features: {
              'nesting-rules': true,
              'custom-selectors': {preserve: true},
            },
          }),
        ],
      },
    },
    json: {
      stringify: true,
    },
    esbuild: {
      pure: ['console.log', 'debugger'],
    },
    server: {
      open: true,
      cors: true,
      port: 8001,
    },
    build: {
      chunkSizeWarningLimit: 2000,
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true,
      //     keep_infinity: true,
      //     passes: 10,
      //   },
      // },
    },
    preview: {
      port: 8000,
      open: true,
    },
  }
})
