/** @see https://vue-i18n.intlify.dev/ */
import {createI18n, type I18nOptions, type I18n} from 'vue-i18n'

import zhCN from 'ant-design-vue/es/locale/zh_CN'
import _zhCN from './modules/zh-CN.json'
import enUS from 'ant-design-vue/es/locale/en_US'
import _enUS from './modules/en-US.json'

const options: I18nOptions = {
  globalInjection: true, // 全局注入
  legacy: false,
  locale: 'zh-CN', // 默认语言
  messages: {
    'zh-CN': {..._zhCN, antd: zhCN},
    'en-US': {..._enUS, antd: enUS},
  },
}

// 创建 i18n 实例
export const i18n: I18n = createI18n<false, typeof options>(options)
