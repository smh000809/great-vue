export {}
declare global {
  export type {} from 'ant-design-vue'
  import('ant-design-vue')
  interface Window {}
}
import {UnwrapRef} from 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    AFlex: (typeof import('ant-design-vue/es'))['Flex']
    AApp: (typeof import('ant-design-vue/es'))['App']
    HelloWorld: (typeof import('../components/HelloWorld/index.vue'))['default']
  }
  export interface ComponentCustomProperties {}
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {}
}
