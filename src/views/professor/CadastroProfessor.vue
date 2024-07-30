<template>
  <div class="formulario">
    <h2 class="title">Página de Cadastro</h2>
    <label class="lab1" for="nome">Nome:</label>
    <input class="int" type="text" v-model="nome">
    <label class="lab2" for="idade">Idade:</label>
    <input class="int" type="number" v-model="idade" >
    <label class="lab3" for="Formacao">Formação:</label>
    <input class="int" type="text" v-model="formacao" >
    <label class="lab4" for="Email">Email:</label>
    <input class="int" type="text" v-model="email" ><br>
    <button class="but" @click="cadastrar">Cadastrar</button> 
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      nome: '',
      idade: 0,
      formacao: '',
      email: ''
    }
  },
  methods: {
    cadastrar() {
      if (this.nome == '' || this.email == '') {
        alert('Preencha todos os campos corretamente!')
      } else {
        const data = {
          nome: this.nome, idade: Number(this.idade),
          formacao: this.formacao, email: this.email,
        }
        
       this.$store.dispatch('fazerCadastro', data)

      this.nome = '',
      this.idade = 0,
      this.formacao = '',
      this.email = ''

      this.chamar()

        }
    },
    chamar() {
      this.$store.dispatch('getProfessores')
    }
  }
}
</script>

<style scoped>
.lab1, .lab2, .lab3, .lab4 {
  margin-top: 40px;
  
}

.lab1, .lab2, .lab3, .lab4 {
  position: absolute;
  margin-left: 30px;
  color: rgb(216, 216, 216);
  font-size: 20px;
  font-family: serif;
}

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
  margin-top: 80px;
  margin-left: 30px;
  background: linear-gradient(#181341, #302b63, #24243e);
  border-radius: 5px red; 
}

/* .formulario {
  color: rgb(216, 216, 216);
  max-width: 400px;
  height: 520px;
  margin-top: 80px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  background: linear-gradient(#1c174e, #302b63, #363691);
  border-radius: 5px;

} */
</style>