import { createStore } from 'vuex'
import axios from 'axios'

const state = () => ({
  jokeofDay: localStorage.getItem('jokeOfDay') || '',
  theme: localStorage.getItem('theme') || 'light'
})

const getters = {
  getJokeOfDay: state => {
    try {
      return JSON.parse(state.jokeofDay)
    } catch (error) {
      return ''
    }
  },
  getTheme: state => {
    return state.theme
  }
}

const mutations = {
  updateJokeOfDay: (state, payload) => {
    state.jokeofDay = payload
    localStorage.setItem('jokeOfDay', JSON.stringify(payload))
  },
  updateTheme(state, payload) {
    state.theme = payload
    localStorage.setItem('theme', payload)
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
  fetchStores() {
    return new Promise((resolve, reject) => {
      axios
        .get('/stores/stores.json')
        .then((response) => {
          // Push response forward for external usecase
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

const store = createStore({
  state,
  getters,
  mutations,
  actions
})

export default store
