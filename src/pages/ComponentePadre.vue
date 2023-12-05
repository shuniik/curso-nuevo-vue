<template>
  <div>
    <p>componente padre</p>
    <div v-for="(tarea, index) in tareas" :key="index">
      <tarea-detalle
        @eliminar="eliminarTarea"
        :nombre="tarea.nombre"
        :completado="tarea.completado"
      >
        {{ tarea.nombre }}
      </tarea-detalle>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TareaDetalle from "../components/TareaDetalle.vue";

const tareas = ref([
  { nombre: "Aprender vue", completado: false },
  { nombre: "Aprender Firebase", completado: false },
  { nombre: "Aprender CSS", completado: false },
  { nombre: "Aprender HTML", completado: false },
  { nombre: "Aprender JavaScript", completado: false },
]);

const eliminarTarea = (nombre) => {
  tareas.value = tareas.value.filter((tarea) => tarea.nombre !== nombre);
};
</script>

<style lang="scss" scoped></style>
