import { createStore } from 'vuex'
import axios from 'axios'

const state = () => ({
  jokeofDay: localStorage.getItem('jokeOfDay') || ''
})

const getters = {
  getJokeOfDay: state => {
    try {
      return JSON.parse(state.jokeofDay)
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  updateJokeOfDay: (state, payload) => {
    state.jokeofDay = payload
    localStorage.setItem('jokeOfDay', JSON.stringify(payload))
  }
}

const actions = {
  fetchJoke () {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.jokes.one/jod?category=knock-knock')
        .then((response) => {
          // Push response forward for external usecase
          store.commit('updateJokeOfDay', response.data.contents.jokes[0])
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const store = createStore({
  state,
  getters,
  mutations,
  actions
})

export default store
