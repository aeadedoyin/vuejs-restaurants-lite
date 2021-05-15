import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import prototypes from './plugins/protoypes'

// CSS
import './index.css'

createApp(App).use(router).use(store).use(prototypes).mount('#app')
