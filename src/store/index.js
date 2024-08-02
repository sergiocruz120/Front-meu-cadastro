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
    retornar (){

      return this.professoress
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

    async fazerCadastro( { dispatch }, dados) {
      try {
        await axios.post('http://localhost:5000/professor/criar', dados)
       
        alert('Cadastro realizado com sucesso')
  
        } catch (error) {
          if (error.response && error.response.status === 400) {
  
            // commit('setErrorMessage', error.response.data.message)
        } else {
            // commit('setErrorMessage', 'Ocorreu um erro inesperado. Tente novamente!')
          }
          alert('Dado inválido. Preencha corretamente!')
      }

      dispatch('getProfessores')
    },


    async fazerAtualizacao({ dispatch }, dados) {
      
      await axios.put(`http://localhost:5000/professor/atualizar/${dados.id}`, dados)
      dispatch('getProfessores')
      alert('Atualização realizada com sucesso!')
    }
  },
  modules: {
  },
      plugins: [vuexPersistedState()]
})


