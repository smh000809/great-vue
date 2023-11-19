import {createApp} from 'vue'

import {createPinia} from 'pinia'
import {createPersistedState} from 'pinia-plugin-persistedstate'
import {serializer} from '@/utils/DataSecurity'

import App from '@/App.vue'
import router from '@/router'
import components from '@/components'
import '@unocss/reset/eric-meyer.css'
import 'ant-design-vue/dist/reset.css'
import '@/styles/global.scss'

import {i18n} from '@/i18n'

import 'uno.css'
import 'virtual:unocss-devtools'

const pinia = createPinia().use(
  createPersistedState({
    key: (id: string) => `__APP__PERSISTED__${id}__`.toUpperCase(),
    debug: true,
    serializer: serializer(),
  }),
)

const app = createApp(App)

app.use(i18n)
app.use(components)
app.use(pinia)
app.use(router)
app.mount('#app')
