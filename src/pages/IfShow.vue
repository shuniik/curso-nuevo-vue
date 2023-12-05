<template>
  <div class="col">
    <h6 class="text-gree">Contador local</h6>
    <h6 class="text-gree">{{ contador }}</h6>
    <q-btn @click="contador++" color="green" label="Incrementar"></q-btn>
  </div>
  <div class="col">
    <h6 class="text-gree">Contador pinia</h6>
    <h6 class="text-gree">{{ store.contador }}</h6>
    <q-btn @click="store.increment" color="green" label="Incrementar"></q-btn>
    <q-btn @click="store.limpiar" color="green" label="Incrementar"></q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useContadorStore } from "stores/contador";

const store = useContadorStore();
const contador = ref(0);
</script>

<style lang="scss" scoped></style>
