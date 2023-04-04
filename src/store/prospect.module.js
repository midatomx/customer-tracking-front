import { isProxy, toRaw } from 'vue'
import { useStore } from 'vuex'

const BASE_URL = 'http://localhost:8080/api'

export const prospect = {
  namespaced: true,
  state: {
    prospects: [],
    prospectsFilter: [],
    dataProspect: {
      'cartype': {
        'id': 11
      },
      'name': 'Erick',
      'firstname': 'García',
      'lastname': 'Martínez',
      'address': 'Dirección',
      'state': 'Estado',
      'city': 'Ciudad',
      'email': 'erick@gmail.com',
      'phone': '5530555471',
      'comments': 'Estos con mis comentarios',
      'active': true
    }
  },
  getters: {},
  mutations: {
    setProspects(state, payload) {
      state.prospects = payload
    },
    setProspectsFilter(state, payload) {
      state.prospectsFilter = payload
    }
  },
  actions: {
    async getProspects({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/prospect`)
        const data = await response.json()
        console.log(data)
        commit('setProspects', data)
        commit('setProspectsFilter', data)
      } catch (e) {
        console.error(e)
      }
    },
    async newProspect({ commit, state }, prospect) {
      try {
        const store = useStore()
        console.log(prospect)
        // const response = await fetch(`${BASE_URL}/prospect`)
        const response = fetch(`${BASE_URL}/prospect/new`, {
          method: 'POST',
          body: JSON.stringify(prospect),
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
    prospectFilterByStatus({ commit, state }, status) {
      let prospects = []
      if(isProxy(state.prospects)) {
        prospects = toRaw(state.prospects)
      }
      
      if(status == '') {
        commit('setProspectsFilter', prospects)
      } else {
        const results = prospects.filter((prospect) => prospect.active === JSON.parse(status))
        commit('setProspectsFilter', results)
      }
    },
    prospectFilterByName({ commit, state }, name) {
      const formattedName = name.toLowerCase()
      
      let prospects = []
      if(isProxy(state.prospects)) {
        prospects = toRaw(state.prospects)
      }
      
      const results = prospects.filter((prospect) => {
        const prospectName = prospect.name.toLowerCase()
        if(prospectName.includes(formattedName)) {
          return prospect
        }
      })
      commit('setProspectsFilter', results)
    }
  },
  modules: {}
}