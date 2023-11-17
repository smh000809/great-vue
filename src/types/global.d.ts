export {}
declare global {
  export type {} from 'ant-design-vue'
  interface Window {}
}
import {UnwrapRef} from 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    AFlex: (typeof import('ant-design-vue/es'))['Flex']
    // FloatingTool: (typeof import('../components/FloatingTool/index.vue'))['default']
  }
  export interface ComponentCustomProperties {
    // readonly FormInstance: UnwrapRef<(typeof import('element-plus'))['FormInstance']>
  }
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    // readonly FormInstance: UnwrapRef<(typeof import('element-plus'))['FormInstance']>
  }
}
