import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMicroApp: ''
  },
  mutations: {
    setCurrentMicroApp (state, payload) {
      state.currentMicroApp = payload.currentMicroApp
    }
  },
  actions: {
    setCurrentMicroApp ({ commit }, payload) {
      commit('setCurrentMicroApp', payload)
    }
  },
  modules: {
  }
})
