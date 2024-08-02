<template>
  <div class="pai">
    <!-- <h1>Componente Pai</h1> -->
    <div class="comp1">
      <atualizarProfessor />
    </div>

    <div class="comp2">
      <ExibirProfesor />
    </div>
    
  </div>
</template>

<script>
import atualizarProfessor from '../professor/AtualizarProfessor.vue'
import ExibirProfesor from '../exibirprofessor/ExibirProfessor.vue'
export default {
  components: {ExibirProfesor, atualizarProfessor},
}
</script>

<style>
.pai {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.comp2 {
  margin-top: 100px;
}


</style>