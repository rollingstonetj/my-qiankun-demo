import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public-path'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
let router = null
let instance = null
function render (props) {
  const { routerPrefix } = props
  // let routerPrefix = null
  // if (props) routerPrefix = props.routerPrefix
  console.log(window.__POWERED_BY_QIANKUN__, routerPrefix, '===')
  /* eslint-disable */
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerPrefix : '/',
    mode: "history",
    routes: routes.options.routes
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app1')
}
if (!(window).__POWERED_BY_QIANKUN__) {
  render({})
}
export async function bootstrap () {
  console.log('子应用1 app bootstrap')
}
export async function mount (props) {
  // 此时需要把这个props传入store中，这样在子应用任何地方都可以使用props     ==============待处理==============
  const store = props.store
  store.dispatch('setCurrentMicroApp', {currentMicroApp: '微应用1'})
  render(props)
  props.setGlobalState({
    count: 1
  })
  console.log(props, 'props')
  props.loadCommonApp('common', {container: '#common_subapp1'})
}
export async function unmount () {
  // 卸载应用实例
  instance.$destroy()
  instance = null
  router= null
}
export async function update (props) {
  console.log('updated props', props)
}
