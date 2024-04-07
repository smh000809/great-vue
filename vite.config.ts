/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import {
  presetUno,
  presetIcons,
  presetAttributify,
  presetTagify,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
  transformerAttributifyJsx,
} from 'unocss'
import legacy from '@vitejs/plugin-legacy'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import PackageJSON from './package.json'
import postcssPresetEnv from 'postcss-preset-env'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
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
      UnoCSS({
        // 快捷方式
        shortcuts: [
          [/^wh-(auto|full|inherit|initial)$/, ([, s]) => `w-${s} h-${s}`],
          [/^wh-(\d+)(px|%|vh)$/, ([, c1, c2]) => `w-${c1}${c2} h-${c1}${c2}`],
          [
            /^flex_(center|start|end|stretch|baseline)_(center|start|end|between|around|evenly)$/,
            ([, s1, s2]) => `flex items-${s1} justify-${s2}`,
          ],
          [
            /^flex_col_(center|start|end|stretch|baseline)_(center|start|end|between|around|evenly)$/,
            ([, s1, s2]) => `flex flex-col items-${s1} justify-${s2}`,
          ],
          [/^lhh-(\d+)px$/, ([, s]) => `h-${s}px leading-${s}px`],
        ],
        theme: {
          colors: {
            primary: '#cbb363',
            success: '#52c41a',
            warning: '#faad14',
            danger: '#ff4d4f',
            info: '#1677ff',
          },
        },
        presets: [
          presetUno(), //
          presetIcons({
            prefix: 'i-',
            extraProperties: {
              display: 'inline-block',
              'vertical-align': 'middle',
              'font-size': '16px',
            },
            warn: true,
          }),
          presetAttributify({}),
          presetTagify({}),
        ],
        transformers: [
          transformerVariantGroup(), //
          transformerDirectives(),
          transformerCompileClass(),
          transformerAttributifyJsx(),
        ],
      }),
      // https 模式
      // basicSsl(),
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
              'custom-selectors': { preserve: true },
            },
          }),
        ],
      },
    },
    esbuild: {
      pure: ['console.log', 'debugger'],
    },
    server: {
      cors: true,
      host: true,
    },
    build: {
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
  }
})
