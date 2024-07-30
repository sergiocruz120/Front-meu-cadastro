<template>
  <div class="formulario">
    <h2 class="title">Pagina de Cadastro</h2>
    <input class="int" type="text" v-model="nome" placeholder="Nome">
    <input class="int" type="text" v-model="email" placeholder="Email">
    <input class="int" type="password" v-model="senha" placeholder="Senha">
    <input class="int" type="password" v-model="confirmarSenha" placeholder="Confirmar senha"><br>
    <button class="but" @click="cadastrar">Cadastrar</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    }
  },
  methods: {
    cadastrar() {
      if (this.nome == '' || this.email == '') {
        alert('Preencha todos os campos corretamente!')
      } else {
        const data = {
          nome: this.nome, email: this.email,
          senha: this.senha, confirmar_senha: this.confirmarSenha
        }
        axios.post('http://localhost:3001/api/postar', data)

          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
          alert('Cadastro realizado com sucesso')
      }
    }
  }
}
</script>

<style scoped>
h2::first-letter {
  font-size: 35px;
}

.title {
  color: rgb(216, 216, 216);
  font-family: serif;
  padding-top: 20px;
}

.but {
  background-color: greenyellow;
  width: 250px;
  height: 40px;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
  margin-top: 40px;
  border: solid 2px rgb(157, 231, 46);
  margin-left: 10px;
  border-radius: 5px;
}

.but:hover {
  background-color: rgb(157, 231, 46);
}

.int {
  font-size: 20px;
  border: solid 2px rgb(216, 216, 216);
  color: rgb(231, 231, 231);
  height: 40px;
  max-width: 250px;
  margin-top: 40px;
  margin-left: 10px;
  background: linear-gradient(#181341, #302b63, #24243e);
  border-radius: 5px;
}

.formulario {
  color: rgb(216, 216, 216);
  max-width: 400px;
  height: 520px;
  margin-top: 80px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  background: linear-gradient(#1c174e, #302b63, #363691);
  border-radius: 5px;

}
</style>