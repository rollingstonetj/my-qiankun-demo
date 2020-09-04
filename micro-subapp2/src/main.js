import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import '../public-path'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

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
  }).$mount('#app2')
}

if (!(window).__POWERED_BY_QIANKUN__) {
  render({})
}
export async function bootstrap () {
  console.log('子应用2 app bootstrap')
}
export async function mount (props) {
  console.log(props, 'mount')
  const { store } = props
  store.dispatch('setCurrentMicroApp', {currentMicroApp: '微应用2'})
  render(props)
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
