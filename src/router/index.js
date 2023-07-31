import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviesView.vue')
  },
  {
    path: '/sessions',
    name: 'sessions',
    component: () => import(/* webpackChunkName: "about" */ '../views/SessionsView.vue')
  },
  {
    path: '/booking/:id',
    name: 'booking',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingView.vue')
  },
  {
    path: '/movies/:id',
    name: 'movies/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
