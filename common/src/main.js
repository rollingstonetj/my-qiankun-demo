import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

let instance = null
function render (props) {
  console.log(window.__POWERED_BY_QIANKUN__, '===')
  /* eslint-disable */
  instance = new Vue({
    store,
    render: h => h(App)
  }).$mount('#app3')
}

if (!(window).__POWERED_BY_QIANKUN__) {
  render({})
}
export async function bootstrap () {
  console.log('common app bootstrap')
}
export async function mount (props) {
  console.log(props, 'common mount')
  // const { store } = props
  // store.dispatch('common', {currentMicroApp: '微应用2'})
  render(props)
}
export async function unmount () {
  // 卸载应用实例
  instance.$destroy()
  instance = null
}

export async function update (props) {
  console.log('updated props', props)
}
