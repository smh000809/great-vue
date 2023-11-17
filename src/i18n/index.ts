/** @see https://vue-i18n.intlify.dev/ */
import {createI18n} from 'vue-i18n'

// 创建 i18n 实例
export const i18n = createI18n({
  globalInjection: true, // 全局注入 $*
  legacy: false, // 是否使用 Composition API
  locale: 'zh-CN', // 默认语言
  messages: {},
})
