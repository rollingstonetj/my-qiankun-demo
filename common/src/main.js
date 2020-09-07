import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../public-path' // 更改webpack路径配置
Vue.config.productionTip = false

let instance = null
function render (props) {
  console.log(window.__POWERED_BY_QIANKUN__, 'common', '===')
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
  console.log(props, '手动挂在的子应用   mount')
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
