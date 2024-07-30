<template>
  <div class="">
    <h1 class="title">Professores</h1> 
    <table class="table">
      <tr class="tr1">
        <th class="titulo">N°</th>
        <th class="titulo" >ID</th>
        <th class="titulo" >Nome</th>
        <th class="titulo" >Idade</th>
        <th class="titulo" >Formação</th>
        <th class="titulo" >Email</th>
      </tr>
      <tr class="tr2" v-for="(professor, index) in professoress" :key="professor.id">
        <td class="dados">{{ index + 1 }}</td>
        <td class="dados" >{{ professor?.id }}</td>
        <td class="dados" >{{ professor?.nome }}</td>
        <td class="dados" >{{ professor?.idade }}</td>
        <td class="dados" >{{ professor?.formacao}}</td>
        <td class="dados" >{{ professor?.email }}</td>
        <router-link class="atualizar" title="Atualizar" :to="'/atualizar/' + professor.id"> <i class="pi pi-pencil"></i></router-link>
        <!-- <ta class="atualizar"><i class="pi pi-pencil" title="Atualizar"><router-link to="/atualizar"></router-link></i></ta> -->
        <router class="excluir"><i @click="apagar(professor.id)" class="pi pi-trash" title="Excluir"></i></router>
      </tr>
    </table>
    <button class="but" @click="buscar">Atualizar</button>  
  </div>
</template>

<script>

export default {
  data: () => {
    return {
        id: 0
    }
  },
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
}
.titulo {
  position: relative;
  right: 35px;
  color: rgb(7, 198, 0);
  height: 7vh;
  padding-left: 100px;
  margin-right: 100px;
  font-size: 20px;
}

.dados {
  position: relative;
  right: 35px;
  color: rgb(216, 216, 216);
  font-family: serif;
  font-size: 15px;
  padding-left: 100px;
  border-top: solid 1px rgb(216, 216, 216);
}
.title {
  color: rgb(216, 216, 216);
  font-family: serif;
  padding-top: 20px;
}

.tr1 {
  color: rgb(216, 216, 216);
  font-family: serif;
  padding-top: 15px;
  font-size: 20px;
  /* border: solid 1px rgb(216, 216, 216); */
}

.tr2 {
  color: rgb(216, 216, 216);
  font-family: serif;
  padding-top: 20px;
  font-size: 10px;
  /* border: solid 1px rgb(216, 216, 216); */
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
  position: relative;
  background-color: rgb(255, 53, 53);
  margin-left: 10px;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 3px;
  top: 16px;
}

.excluir:hover {
  cursor: pointer;
  color: rgb(193, 193, 193);
}

.atualizar {
  position: relative;
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