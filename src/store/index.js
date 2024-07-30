import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vuexPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    professores: [],
  },

  // Responsavel por ler o estado!
  getters: {
    
    professoress: state => state.professores
  
  },

  // Responsavel por alterar o estado
  mutations: {
    atualizar(state,id) {
     state.professores = state.professores.filter(professor => professor.id !== id)
    },
    setProfessores(state, payload) {
      state.professores = payload
    },
    cadastrar (state, dados) {
      state.professores.push(dados)
    },
    retornar (state){

      return state.professores
    }
  },

  // Responsavel por colocar regras nas alterações/mutações
  actions: {
    async getProfessores({ commit }) {
      const response = await axios.get('http://localhost:5000/professor/listar')
      commit('setProfessores', response.data)
    },

    async deletar({ commit }, id) {
      await axios.delete(`http://localhost:5000/professor/deletar/${id}`)
      commit('atualizar', id)
    },

    async fazerCadastro({ commit }, dados) {
      await axios.post('http://localhost:5000/professor/criar', dados)

      alert('Cadastro realizado com sucesso')

      commit('cadastrar', dados)
      
      commit('retornar')
      
    },

    async fazerAtualizacao({ commit }, dados) {
      console.log(dados)
      
      await axios.put(`http://localhost:5000/professor/atualizar/${dados.id}`, dados)
      alert('Atualizado com sucesso')
      commit('getProfessores', dados)
    }
  },
  modules: {
  },
      plugins: [vuexPersistedState()]
})
