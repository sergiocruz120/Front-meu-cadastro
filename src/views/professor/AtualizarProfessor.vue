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
    <div>
      {{ id }}
    </div>
  </div>
</template>

<script>

export default {

  props: ['id'],
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
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: serif;
}

h2::first-letter {
  font-size: 35px;
}

.title {
  position: relative;
  align-items: center;
  color: rgb(255, 255, 255);
  font-family: serif;
  background-color: rgb(40, 40, 40);
  height: 8vh;
  padding-top: 7px;
  border-top-left-radius:  10px;
  border-top-right-radius:  10px;
}

.but {
  background-color: rgb(40, 40, 40);
  width: 100px;
  height: 35px;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
  margin-top: 50px;
  border: solid 2px rgb(31, 31, 31);
  margin-left: 10px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

.but:hover {
  background-color: rgb(72, 72, 72);
}

.int {
  font-size: 20px;
  border: solid 2px rgb(216, 216, 216);
  color: rgb(12, 12, 12);
  height: 35px;
  max-width: 250px;
  margin-top: 80px;
  margin-left: 30px;
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