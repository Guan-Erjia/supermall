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
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let additem = context.state.cartList.find(each => each.iid === payload.iid);
        if (additem) {
          context.commit('addCounter', additem)
          resolve('当前的商品数量+1')
        } else {
          payload.count = 1
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
      })
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
