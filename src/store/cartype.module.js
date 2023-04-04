import { isProxy, toRaw } from 'vue'
import { useStore } from 'vuex'

const BASE_URL = 'http://localhost:8080/api'

export const cartype = {
  namespaced: true,
  state: {
    cartypes: [],
    cartypesFilter: []
  },
  getters: {},
  mutations: {
    setCartypes(state, payload) {
      state.cartypes = payload
    },
    setCartypesFilter(state, payload) {
      state.cartypesFilter = payload
    }
  },
  actions: {
    async getCartypes({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/cartype`)
        const data = await response.json()
        console.log(data)
        commit('setCartypes', data)
        commit('setCartypesFilter', data)
      } catch (e) {
        console.error(e)
      }
    },
    async newCartype({ commit, state }, cartype) {
      try {
        const store = useStore()
        console.log(cartype)
        const response = fetch(`${BASE_URL}/cartype/new`, {
          method: 'POST',
          body: JSON.stringify(cartype),
          headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(err => console.log(err))
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    },
    cartypeFilterByStatus({ commit, state }, status) {
      let cartypes = []
      if(isProxy(state.cartypes)) {
        cartypes = toRaw(state.cartypes)
      }
      
      if(status == '') {
        commit('setCartypesFilter', cartypes)
      } else {
        const results = cartypes.filter((cartype) => cartype.active === JSON.parse(status))
        commit('setCartypesFilter', results)
      }
    },
    cartypeFilterByName({ commit, state }, name) {
      const formattedName = name.toLowerCase()
      
      let cartypes = []
      if(isProxy(state.cartypes)) {
        cartypes = toRaw(state.cartypes)
      }
      
      const results = cartypes.filter((cartype) => {
        const cartypeName = cartype.name.toLowerCase()
        if(cartypeName.includes(formattedName)) {
          return cartype
        }
      })
      commit('setCartypesFilter', results)
    }
  },
  modules: {}
}