import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from '../views/TriviaApp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'trivia',
    component: TriviaApp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
