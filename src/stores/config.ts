import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useConfigStore = defineStore(
  'config',
  () => {
    type TThemeTag = 'light' | 'dark'
    const themeTag = ref<TThemeTag>('light')
    const wireframe = ref<boolean>(false)
    const compact = ref<boolean>(false)
    const toggleThemeTag = () => (themeTag.value = themeTag.value === 'dark' ? 'light' : 'dark')
    const toggleWireframe = () => (wireframe.value = !wireframe.value)
    const toggleCompact = () => (compact.value = !compact.value)
    return {
      themeTag, // 主题
      toggleThemeTag,
      wireframe, // 线框化主题
      toggleWireframe,
      compact, // 紧凑主题
      toggleCompact,
    }
  },
  {
    persist: true,
  },
)
