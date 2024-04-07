import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { serializer } from '@/utils/DataSecurity'

import Antd from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components'
import '@unocss/reset/eric-meyer.css'
import 'ant-design-vue/dist/reset.css'
import '@/styles/global.scss'

import { i18n } from '@/i18n'

import 'virtual:uno.css'

const pinia = createPinia().use(
  createPersistedState({
    key: (id: string) => `__APP__PERSISTED__${id}__`.toUpperCase(),
    debug: true,
    serializer: serializer(),
  }),
)

createApp(App) //
  .use(Antd)
  .use(i18n)
  .use(components)
  .use(pinia)
  .use(router)
  .mount('#app')
