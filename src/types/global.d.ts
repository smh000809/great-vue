export {}
declare global {
  export type {} from 'ant-design-vue'
  interface Window {}
}
import {UnwrapRef} from 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    AFlex: (typeof import('ant-design-vue/es'))['Flex']
    HelloWorld: (typeof import('../components/HelloWorld/index.vue'))['default']
  }
  export interface ComponentCustomProperties {
    HelloWorld: (typeof import('../components/HelloWorld/index.vue'))['default']
  }
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    HelloWorld: (typeof import('../components/HelloWorld/index.vue'))['default']
  }
}
