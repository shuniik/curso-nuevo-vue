<template>
  <div>
    <h6>Propiedades reactivas Vue 3</h6>

    <h6>{{ nombre }}</h6>

    <q-input v-model="nombre"></q-input>
    <h6>
      {{ direccion }}
    </h6>

    <h6>
      {{ direccion.region }} - {{ direccion.pais }} - {{ direccion.ciudad }}
    </h6>

    <q-btn :label="nombre" @click="modificar"> Modificar</q-btn>
  </div>
</template>

<script setup>
//importatciones

import { ref } from "vue";

//variables o propiedades

const nombre = ref("Libreta");
const direccion = ref({
  region: "Latinoamerica",
  pais: "Guatemala",
});
//metodos

function modificar() {
  nombre.value = "Cambiando valor  desde botón";
  direccion.value.ciudad = "Quetzaltenango";
}
</script>

<style lang="scss" scoped></style>
