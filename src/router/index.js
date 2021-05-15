import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Meals from '@/pages/Meals.vue'
import Restaurants from '@/pages/Restaurants.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
