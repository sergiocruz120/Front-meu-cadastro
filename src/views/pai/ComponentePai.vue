<template>
  <div>
    <h1>Componente Pai</h1>
    <div class="comp">
      <atualizarProfessor />
    </div>
    <div class="comp">
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
h1 {
  color: white;
}

.comp {
  margin-top: 10px;
  font-size: 1px;
}

@media (max-width: 950px) {
  .comp {
    flex-direction: column; /* Muda para layout vertical em telas pequenas */
  }
}

</style>