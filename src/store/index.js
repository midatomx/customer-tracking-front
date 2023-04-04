import { createStore } from 'vuex'
import { prospect } from '@/store/prospect.module'
import { cartype } from '@/store/cartype.module'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    prospect,
    cartype
  }
})
