<template>
  <div class="divprimaria">
    <!-- <h1 class="title">Professores Cadastrados</h1>  -->
    <table class="table">
      <tr class="tr1">
        <th class="titulo">N°</th>
        <th class="titulo" >ID</th>
        <th class="titulo" >Nome</th>
        <th class="titulo" >Idade</th>
        <th class="titulo" >Formação</th>
        <th class="titulo" >Email</th>
        <th class="titulo"></th>
      </tr>
      <tr class="tr2" v-for="(professor, index) in professoress" :key="professor.id">
        <td class="dados">{{ index + 1 }}</td>
        <td class="dados" >{{ professor?.id }}</td>
        <td class="dados" >{{ professor?.nome }}</td>
        <td class="dados" >{{ professor?.idade }}</td>
        <td class="dados" >{{ professor?.formacao}}</td>
        <td class="dados" >{{ professor?.email }}</td>
        <td class="dados" >
          <router-link class="atualizar" title="Editar" :to="'/atualizar/' + professor.id"> <i class="pi pi-pencil"></i></router-link>
          <i class="excluir"><i @click="apagar(professor.id)" class="pi pi-trash" title="Excluir"></i></i>
        </td>
      </tr>
    </table>
   
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {  
 
  // Getters são usados na propriedade computed
  computed: {
    ...mapActions(['getProfessores']),
    professoress() {
    
    this.getProfessores
    return this.$store.state.professores
    },
  },
  // Mutations sao usadas na propriedade methods
  methods: {
  // ...mapActions(['deletar']),
    apagar(id) {
       this.$store.dispatch('deletar', id)
      
    },
    buscar() {
      this.$store.dispatch('getProfessores')
    }
}

}
</script>

<style scoped>

.table {
  margin-right: 120px;
  background-color: rgb(218, 218, 218);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.titulo {
  background-color: rgb(59, 59, 59);
  position: relative;
  color: rgb(255, 255, 255);
  /* height: 7vh; */
  padding-left: 80px;
  font-size: 20px;
  border-bottom: 5px solid rgb(102, 228, 107);
}

.titulo:nth-of-type(1) {
  border-top-left-radius: 10px;
}

.titulo:nth-of-type(7) {
  border-top-right-radius: 10px;
}

.dados {
  position: relative;
  color: rgb(24, 24, 24);
  font-size: 20px;
  padding-left: 80px;
  border-top: solid 5px rgb(255, 255, 255);
}

.tr2:nth-child(odd) {
  background-color: #c6c6c6;
}

.title {
  color: rgb(35, 18, 18);
  font-family: serif;
  padding-top: 20px;
  border-top-left-radius: 10px;
}

.tr1 {
  background-color: rgb(59, 59, 59);
  font-family: serif;
  padding-top: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.tr2 {
  color: rgb(4, 3, 3);
  font-family: serif;
  padding-top: 20px;
  font-size: 20px;
  transition: 0.3s ease-in-out;
}

.tr2:hover {
  background-color: rgb(162, 162, 162);
}

.but {
  color: rgb(7, 7, 7);
  
  font-size: 17px;
  cursor: pointer;
  border: solid 2px rgb(216, 216, 216);  
  border-radius: 5px;
}

.but:hover {
  background: rgb(164, 164, 164);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
}

.excluir {
  background-color: rgb(255, 53, 53);
  margin-left: 10px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 3px;
  top: 16px;
  margin-right: 15px;
}

.excluir:focus {
  outline: 4px solid rgb(255, 58, 58);
}

.excluir:hover {
  cursor: pointer;
  color: rgb(193, 193, 193);
}

.atualizar {
  background-color: rgb(53, 53, 255);
  margin-left: 10px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 3px;
  top: 16px;
}

.atualizar:focus {
  outline: 4px solid rgb(62, 58, 255);
}

.atualizar:hover {
  cursor: pointer;
  color: rgb(193, 193, 193);
}

</style>