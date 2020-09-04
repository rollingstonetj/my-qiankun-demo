import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, initGlobalState } from 'qiankun' // setDefaultMountApp
import { loadCommonApp } from './loadApp'
Vue.config.productionTip = false
let app = null
/**
 * 渲染函数
 * appContent 子应用html内容
 * loading 子应用加载效果，可选
 */
function render ({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  } else {
    app.content = appContent
    app.loading = loading
  }
}
/**
 * 路由监听
 * @param {*} routerPrefix前缀
*/
function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix)
}

function initApp () {
  render({ appContent: '', loading: true })
}
initApp()
registerMicroApps([
  {
    name: 'micro-subapp1',
    entry: '//localhost:8081/',
    container: '#subappContent',
    activeRule: genActiveRule('/app1'),
    props: {
      routerPrefix: '/app1',
      store,
      loadCommonApp
    }
  },
  {
    name: 'micro-subapp2',
    entry: '//localhost:8082/',
    container: '#subappContent',
    activeRule: genActiveRule('/app2'),
    props: {
      routerPrefix: '/app2',
      store
    }
  }
], {
  beforeLoad: app => {
    console.log('before Load', app)
  },
  beforeMount: app => {
    console.log('before Mount', app)
  },
  afterMount: app => {
    console.log('after Mount', app)
  },
  beforeUnmount: app => {
    console.log('before Unmount', app)
  },
  afterUnmount: app => {
    console.log('after Unmount', app)
  }
})
// 设置默认子应用,与 genActiveRule中的参数保持一致
// setDefaultMountApp('/app1')
const globalState = {
  count: 0
}
const actions = initGlobalState(globalState)
actions.onGlobalStateChange((state, prev) => {
  globalState.count = state.count
  console.log(globalState, 'gloablState')
})
actions.offGlobalStateChange()
start({
  prefetch: false,
  sandbox: {
    // strictStyleIsolation: true
  },
  singular: true
})
