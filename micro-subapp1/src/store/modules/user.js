// import types from '../types'
const state = {
  count: 0
}
const getters = {}
const mutations = {
  increment (state, payload) {
    state.count += payload
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
