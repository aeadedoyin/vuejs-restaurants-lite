import Vuex from 'vuex'

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

export default () => Vuex.createStore({
  state,
  getters,
  mutations,
  actions
})
