import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import prototypes from './plugins/protoypes'

// CSS
import './index.css'


Vue.config.productionTip = false

Vue.use(prototypes)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
