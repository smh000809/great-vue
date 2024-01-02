import HelloWorld from './HelloWorld/index.vue'

export default {
  install(app: any) {
    app.component('HelloWorld', HelloWorld)
  },
}
