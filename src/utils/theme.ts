import { computed } from 'vue'
import type { ThemeConfig, MappingAlgorithm } from 'ant-design-vue/es/config-provider/context'
import { theme as Theme } from 'ant-design-vue'
import { useConfigStore } from '@/stores/config'

export const ATheme = Theme

export const dark = (): ThemeConfig => ({
  token: {
    colorPrimary: '#cbb363',
  },
  algorithm: ATheme.darkAlgorithm,
  components: {
    Layout: {
      colorBgHeader: '#000000',
    },
    Menu: {
      colorItemBg: '#000000',
      colorSubItemBg: '#181818',
    },
  },
})

export const light = (): ThemeConfig => ({
  token: {
    colorPrimary: '#cbb363',
  },
  algorithm: ATheme.defaultAlgorithm,
  components: {
    Layout: {
      colorBgHeader: '#ffffff',
    },
  },
})

export const theme = computed<ThemeConfig>(() => {
  const configStore = useConfigStore()
  let themeConfig: ThemeConfig = {}
  if (configStore.themeTag === 'dark') {
    themeConfig = { ...themeConfig, ...dark() }
  } else {
    themeConfig = { ...themeConfig, ...light() }
  }
  // 紧凑主题
  if (configStore.compact) {
    themeConfig.algorithm = [themeConfig.algorithm as MappingAlgorithm, ATheme.compactAlgorithm]
  }
  // 线框化主题
  themeConfig.token.wireframe = configStore.wireframe
  return themeConfig
})
