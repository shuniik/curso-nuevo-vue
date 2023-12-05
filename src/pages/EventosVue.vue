<template>
  <div class="q-pa-lg">
    <p>
      <q-btn @click="contador++">Ingrementar</q-btn>
      <q-btn @click="incrementar">Ingrementar</q-btn>
    </p>
    <p>{{ contador }}</p>
    <p @click="boton2">
      Prueba de texto
      <q-btn @click.stop="boton1"> Propagacion</q-btn>
    </p>
    <p>
      <q-input
        @keyup.page-down="incrementar"
        label="Incrementamos el contador con PAGE-DOWN"
      >
      </q-input>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(0);

function boton1() {
  console.log("click en boton 1");
}

function boton2() {
  console.log("click en boton 2 ");
}

function incrementar() {
  console.log("aumentando..");
  contador.value++;
}
</script>

<style lang="scss" scoped></style>
