<template>
  <div class="">
    <h1 class="title">Professores Cadastrados</h1> 
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
          <router class="excluir"><i @click="apagar(professor.id)" class="pi pi-trash" title="Excluir"></i></router>
        </td>
        <!-- <ta class="atualizar"><i class="pi pi-pencil" title="Atualizar"><router-link to="/atualizar"></router-link></i></ta> -->
      </tr>
    </table>
    <!-- <button class="but" @click="buscar">Atualizar</button>   -->
  </div>
</template>

<script>

export default {  
  // data: () => {
  //   return {
  //       id: 0
  //   }
  // },
  // Getters são usados na propriedade computed
  computed: {
   professoress() {
      return  this.$store.state.professores
    }
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
  margin-top: 50px;
  margin-right: 120px;
  background-color: rgb(218, 218, 218);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px; */
  /* border-radius: 20px; */
  margin: 0;

}
.titulo {
  position: relative;
  color: rgb(92, 213, 114);
  height: 7vh;
  padding-left: 100px;
  font-size: 25px;
  border-bottom: 10px solid rgb(247, 247, 247);
}

.dados {
  position: relative;
  color: rgb(0, 0, 0);
  font-family: serif;
  font-size: 20px;
  padding-left: 100px;
  border-top: solid 5px rgb(255, 255, 255); 
}
.title {
  color: rgb(35, 18, 18);
  font-family: serif;
  padding-top: 20px;
}

.tr1 {
  color: rgb(13, 19, 13);
  background-color: rgb(59, 59, 59);
  font-family: serif;
  padding-top: 15px;
  font-size: 20px;
  margin-left: 15px;
  border-radius: 20px;
}

.tr2 {
  color: rgb(4, 3, 3);
  font-family: serif;
  padding-top: 20px;
  font-size: 20px;
}

.but {
  position: absolute;
  color: white;
  left: 50px;
  top: 50px;
  background: linear-gradient(#181341, #302b63, #24243e);
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-family: serif;
  cursor: pointer;
  border: solid 2px rgb(216, 216, 216);
  border-radius: 5px;
}

.but:hover {
  background: rgb(14, 15, 74);
}

/* .excluir > i {
 color: rgb(255, 255, 255);
 margin-top: 18px;
 font-size: 15px;
 cursor: pointer;
}

.excluir > i:hover {
  color: rgb(156, 156, 156);
} */

.excluir {
  /* position: relative; */
  background-color: rgb(255, 53, 53);
  margin-left: 10px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 3px;
  top: 16px;
  margin-right: 15px;
}

.excluir:hover {
  cursor: pointer;
  color: rgb(193, 193, 193);
}

.atualizar {
  /* position: relative; */
  background-color: rgb(53, 53, 255);
  margin-left: 10px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 3px;
  top: 16px;
}

.atualizar:hover {
  cursor: pointer;
  color: rgb(193, 193, 193);
}

</style>