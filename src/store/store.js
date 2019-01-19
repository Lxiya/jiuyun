import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCode: ''
  },
  mutations: {
    saveShopCode(state, shopCode) {
      state.shopCode = shopCode
    }
  },
  getters: {
    getShopCode(state) {
      return state.shopCode
    }
  }
})
