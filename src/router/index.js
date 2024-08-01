import Vue from 'vue'  
import VueRouter from 'vue-router' 
import Cadastro from '../views/paginacadastro/PaginaCadastro.vue'
import Professor from '@/views/professor/CadastroProfessor.vue'
import ExibirProfessor from '@/views/exibirprofessor/ExibirProfessor.vue'
import AtualizarProfessor from '@/views/professor/AtualizarProfessor.vue'
import Pai from '@/views/pai/ComponentePai.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/professor',
    name: 'cadastro-professor',
    component: Professor
  },
  {
    path: '/exibir',
    name: 'exibir',
    component: ExibirProfessor
  },
  { 
    path: '/atualizar/:id',
    name: 'atualizar',
    props: true,
    component: AtualizarProfessor
  },
  {
    path: '/pai',
    name: 'pai',
    component: Pai
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
