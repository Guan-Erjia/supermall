import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
      console.log(payload.count)
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
      payload.checked = true
      console.log(payload.count)
    }
  },
  actions: {
    addCart(context, payload) {
      let additem = context.state.cartList.find(each => each.iid === payload.iid);
      if (additem) {
        context.commit('addCounter', additem)
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
      }
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
