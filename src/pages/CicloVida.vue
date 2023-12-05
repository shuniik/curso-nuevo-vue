<template>
  <div>
    <h5>Ciclo de vida</h5>
    <q-btn to="/"> Ir al inicio</q-btn>
    <q-btn @click="tareas.push('nueva tarea')"> Agreagar tarea</q-btn>

    {{ tareas }}
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

const tareas = ref([]);

onMounted(() => {
  console.log(" se ha montado el componente ");
});

onUnmounted(() => {
  console.log("se ha desmontado el componente");
});

onUpdated(() => {
  console.log("se haactualizado el componenete ");
});
</script>

<style lang="scss" scoped></style>
