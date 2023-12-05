<template>
  <div>Arreglos</div>

  <q-input v-model="nuevaTarea"></q-input>
  <q-btn @click="agregar">Agregar</q-btn>

  <p>{{ tareas }}</p>
  <li v-for="(item, index) in tareasPendientes" :key="index">
    Nombre: {{ item.nombre }} - Estado: {{ item.estado }} - Index: {{ index }}
    <q-btn @click="eliminar(item)">Eliminar</q-btn>
    <q-toggle v-model="item.estado" />
  </li>
  <p>
    Tareas terminadas <span>{{ contaTermiandas }}</span>
  </p>
  <p>
    Ocultar tareas completadas:
    <q-toggle v-model="ocultarCompletadas" />
  </p>
</template>

<script setup>
import { stringify } from "postcss";
import { ref, computed } from "vue";
//variables

const tareas = ref([]);

const nuevaTarea = ref("");

const ocultarCompletadas = ref(false);

// propiedades computadas

const contaTermiandas = computed(() => {
  let contador = 0;
  tareas.value.forEach((item) => {
    if (item.estado) {
      contador++;
    }
  });
  return contador;
});

const tareasPendientes = computed(() => {
  if (ocultarCompletadas.value) {
    return tareas.value.filter((item) => item.estado === false);
  } else {
    return tareas.value;
  }

  return 0;
});

//metodos

function agregar() {
  tareas.value.push({ nombre: nuevaTarea.value, estado: false });
  nuevaTarea.value = "";
}

function eliminar(tarea) {
  tareas.value = tareas.value.filter((item) => item != tarea);
}
</script>

<style lang="scss" scoped></style>
