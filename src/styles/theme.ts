import type {ThemeConfig} from 'ant-design-vue/es/config-provider/context'
import {theme as ATheme} from 'ant-design-vue'

export const dark = (): ThemeConfig => ({
  token: {
    colorPrimary: '#cbb363',
  },
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
  components: {
    Layout: {
      colorBgHeader: '#ffffff',
      // siderBg: '#ffffff',
      // footerBg: '#ffffff',
      // footerPadding: '0',
      // headerPadding: '0',
      // headerHeight: 64,
    },
    Menu: {},
  },
})

export const theme = (): ThemeConfig => {
  return {
    ...light(),
    algorithm: [ATheme.defaultAlgorithm],
  }
}
