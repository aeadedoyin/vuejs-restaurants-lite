import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  restaurants: ['Hey'],
  sessionUserEmail: 'hi@gmail.com'
})

const getters = {
  getStores: state => {
    return state.restaurants
  },
  getSessionUserEmail: state => {
    return state.sessionUserEmail
  }
}

const mutations = {

}

const actions = {
}

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
