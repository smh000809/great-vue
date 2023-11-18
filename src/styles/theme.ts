import type {ThemeConfig} from 'ant-design-vue/es/config-provider/context'
import {theme as ATheme} from 'ant-design-vue'
import {useConfigStore} from '@/stores/config'

export const dark = (): ThemeConfig => ({
  token: {
    colorPrimary: '#cbb363',
  },
  algorithm: [ATheme.darkAlgorithm],
  components: {
    Layout: {
      colorBgHeader: '#000000',
    },
    Menu: {
      // darkItemBg: '#000000',
      // darkSubMenuItemBg: '#181818',
    },
  },
})

export const light = (): ThemeConfig => ({
  token: {
    colorPrimary: '#cbb363',
  },
  algorithm: [ATheme.defaultAlgorithm],
  components: {
    Layout: {
      colorBgHeader: '#ffffff',
      // siderBg: '#ffffff',
      // footerBg: '#ffffff',
    },
    Menu: {},
  },
})

export const theme = (): ThemeConfig => {
  const configStore = useConfigStore()
  if (configStore.themeTag === 'dark') {
    return dark()
  } else {
    return light()
  }
}
