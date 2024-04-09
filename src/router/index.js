import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/PaginaCadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
