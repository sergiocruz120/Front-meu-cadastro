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

      this.$router.push('/exibir')

        }
    },
    chamar() {
      this.$store.dispatch('getProfessores')
    }
  }
}
</script >

<style scoped>
.lab1, .lab2, .lab3, .lab4 {
  margin-top: 40px;
  
}

.lab1, .lab2, .lab3, .lab4 {
  position: absolute;
  margin-left: 30px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: serif;
}

h2::first-letter {
  font-size: 35px;
}

.title {
  color: rgb(244, 244, 244);
  font-family: serif;
  background-color: rgb(39, 39, 39);
  border-top-left-radius:  10px;
  border-top-right-radius:  10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.but {
  background-color: rgb(58, 58, 58);
  color: white;
  width: 150px;
  height: 35px;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
  margin-top: 40px;
  border: solid 2px rgb(45, 45, 45);
  margin-left: 10px;
  border-radius: 5px;
}

.but:hover {
  background-color: rgb(112, 112, 112);
}

.but:focus {
  outline: 5px solid rgb(154, 154, 154);
}

.int {
  font-size: 20px;
  border: solid 2px rgb(216, 216, 216);
  color: rgb(12, 12, 12);
  height: 35px;
  max-width: 250px;
  margin-top: 80px;
  margin-left: 30px;
  border-radius: 5px;
  border: solid 2px rgb(115, 115, 115);
}

.int:focus {
  outline: 3px solid rgb(115, 115, 115);
}

.formulario {
  position: relative;
  background-color: rgb(211, 211, 211);
  width: 1200px;
  height: 40vh;
  border-radius: 10px;
  top: 70px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


}
</style>