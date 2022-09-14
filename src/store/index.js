import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// key:默认值是vuex
// storage:存储的方式，默认是本地存储
// reducer:指定持久化哪些数据，函数，返回一个对象，对象就作为存储的value
// 参数state
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'HEIMA_TOUTIAO',
      // storage:window.sessionStorage,
      reducer(state) {
        const { tokenObj, myChannels } = state
        return { tokenObj, myChannels }
      }
    })
  ],
  state: {
    tokenObj: {},
    myChannels: []
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.tokenObj = token
    },
    SET_MY_CHANNELS(state, channels) {
      state.myChannels = channels
    }
  },
  actions: {},
  modules: {}
})
