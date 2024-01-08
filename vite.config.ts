/// <reference types="vitest" />
import {fileURLToPath, URL} from 'node:url'
/** @type {import('vite').UserConfig} */
import {defineConfig, ConfigEnv, loadEnv} from 'vite'
import {configDefaults} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import PackageJSON from './package.json'
import postcssPresetEnv from 'postcss-preset-env'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import TurboConsole from 'unplugin-turbo-console/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_APP')
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
      VueDevTools(),
      UnoCSS(),
      // https 模式
      // basicSsl(),
      legacy({
        targets: PackageJSON.browserslist,
      }),
      AutoImport({
        imports: ['vue', '@vueuse/core', '@vueuse/math', 'pinia', 'vue-router', 'vue-i18n', 'vitest'],
        resolvers: [AntDesignVueResolver({importStyle: false})],
        dts: fileURLToPath(new URL('./src/types/auto-imports.d.ts', import.meta.url)),
        vueTemplate: true,
        eslintrc: {
          enabled: true,
          filepath: fileURLToPath(new URL('./src/types/.eslintrc-auto-import.json', import.meta.url)),
          globalsPropValue: true,
        },
        dirs: [],
      }),
      Components({
        directives: true,
        resolvers: [AntDesignVueResolver({importStyle: false})],
        dts: fileURLToPath(new URL('./src/types/components.d.ts', import.meta.url)),
        dirs: [],
      }),
      TurboConsole(),
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
      host: true,
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
      open: true,
    },
  }
})
