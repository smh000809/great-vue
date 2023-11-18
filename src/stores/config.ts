export const useConfigStore = defineStore(
  'config',
  () => {
    type TThemeTag = 'light' | 'dark'
    const themeTag = ref<TThemeTag>('light')
    const toggleThemeTag = () => {
      themeTag.value = themeTag.value === 'dark' ? 'light' : 'dark'
      console.log(`setThemeTag ~ themeTag:`, themeTag.value)
    }
    return {
      themeTag,
      toggleThemeTag,
    }
  },
  {
    persist: true,
  },
)
