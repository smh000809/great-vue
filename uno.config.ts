/**
 * @see https://unocss.dev/ - UnoCSS 官网
 * @see https://icones.js.org/ - 图标方案
 * @see https://iconify.design/ - 图标方案
 */
import {
  defineConfig, //
  presetUno,
  presetIcons,
  presetAttributify,
  presetTagify,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  rules: [],
  // 快捷方式
  shortcuts: [
    /**
     * wh-auto => width: auto; height: auto;
     * wh-full => width: 100%; height: 100%;
     * wh-inherit => width: inherit; height: inherit;
     * wh-initial => width: initial; height: initial;
     */
    [/^wh-(auto|full|inherit|initial)$/, ([, s]) => `w-${s} h-${s}`],
    /**
     * wh-0px => width: 0px; height: 0px;
     * wh-16px => width: 16px; height: 16px;
     */
    [/^wh-(\d+)(px|%)$/, ([, c1, c2]) => `w-${c1}${c2} h-${c1}${c2}`],
    [
      /^flex_(center|start|end|stretch|baseline)_(center|start|end|between|around|evenly)$/,
      ([, s1, s2]) => `flex items-${s1} justify-${s2}`,
    ],
    [
      /^flex_col_(center|start|end|stretch|baseline)_(center|start|end|between|around|evenly)$/,
      ([, s1, s2]) => `flex flex-col items-${s1} justify-${s2}`,
    ],
    /**
     * l-h-0px => line-height: 0px; height: 0px;
     * l-h-16px => line-height: 16px; height: 16px;
     * l-h-24px => line-height: 24px; height: 24px;
     * l-h-32px => line-height: 32px; height: 32px;
     */
    [/^l-h-(\d+)px$/, ([, s]) => `h-${s}px leading-${s}px`],
  ],
  theme: {
    colors: {
      primary: '#40b159',
      disabled: '#858b9c',
      danger: '#f56c6c',
      warning: '#e6a23c',
      info: '#909399',
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
})
