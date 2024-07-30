<template>
  <div class="formulario">
    <h2 class="title">Atualizar Dados</h2>
    <label class="lab1" for="nome">Nome:</label>
    <input class="int" type="text" v-model="dados.nome" >
    <label class="lab2" for="idade">Idade:</label>
    <input class="int" type="number" v-model.number="dados.idade" >
    <label class="lab3" for="Formacao">Formação:</label>
    <input class="int" type="text" v-model="dados.formacao" >
    <label class="lab4" for="Email">Email:</label>
    <input class="int" type="text" v-model="dados.email" ><br>
    <button  @click="atualizar" class="but">Salvar</button>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      dados:{
              id: 0,
              nome: '',
              idade: 0,
              formacao: '',
              email: ''
      }
    }
  },
  
  created() {
    this.dados.id = Number(this.$route.params.id)

    const professor = this.professoress
    
    if(professor) {
      this.dados.nome = professor.nome
      this.dados.idade = professor.idade
      this.dados.formacao = professor.formacao
      this.dados.email = professor.email
    }
  },
  
  computed: {
   professoress() {
      const id = Number(this.$route.params.id)

      const data =  this.$store.state.professores 

      return data.find((professor) => professor.id == id)
    },
    atualizarDados() {
      return this.$store.state.professores}
  },

  methods: {
    atualizar() {
      if (this.dados.nome == '' || this.dados.email == '') {
        alert('Preencha todos os campos corretamente!')
      } else {
        
       this.$store.dispatch('fazerAtualizacao', this.dados)
       
       this.$router.push('/exibir')


        }
    },
    buscar() {
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
  background-color: rgb(146, 239, 6);
  width: 100px;
  height: 35px;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
  margin-top: 50px;
  border: solid 2px rgb(157, 231, 46);
  margin-left: 10px;
  border-radius: 5px;
}

.but:hover {
  background-color: rgb(157, 231, 46);
}

.int {
  font-size: 18px;
  border: solid 2px rgb(216, 216, 216);
  color: rgb(231, 231, 231);
  height: 30px;
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