import {Flex, App} from 'ant-design-vue'
import HelloWorld from './HelloWorld/index.vue'

export default {
  install(app: any) {
    app.component('AFlex', Flex)
    app.component('AApp', App)
    app.component('HelloWorld', HelloWorld)
  },
}
