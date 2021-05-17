import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "HomePage" */ '../pages/Home.vue')
  },
  {
    path: '/meals',
    name: 'Meals',
    component: () =>
      import(/* webpackChunkName: "OtherPages" */ '../pages/Meals.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: () =>
      import(/* webpackChunkName: "OtherPages" */ '../pages/Restaurants.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
