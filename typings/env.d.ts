/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const defineComponent: DefineComponent<{}, {}, any>
  export default defineComponent
}

declare module '*.md' {
  import type { DefineComponent } from 'vue'

  const defineComponent: DefineComponent<{}, {}, any>
  export default defineComponent
}

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __APP_VERSION__: string
