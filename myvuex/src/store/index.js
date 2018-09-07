import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    licence: 'U8ms2d5',
    arr: [
      {id: 1, name: 'tom', score: 80},
      {id: 2, name: 'jer', score: 43},
      {id: 3, name: 'guwar', score: 22}
    ]
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    }
  },
  getters: {
    arrList: function (state) {
      return state.arr.map(function (item) {
        return {student: item.name, isGood: item.score >= 60 ? 'good' : 'bad'}
      })
    }
  },
  actions: {
    increment ({commit}) {
      commit('increment', 20)
    }
  }
})

export default store
