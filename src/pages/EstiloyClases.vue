<template>
  <div>
    <h5>Reactividad de clases y estilos</h5>
    <p>
      <q-toggle v-model="isPrimary" label="es primary" />
    </p>
    <p class="q-pa-lg" :class="{ 'bg-primary': isPrimary }">
      hola mundo de programación
    </p>

    <p><q-toggle v-model="isDark" label=" es dark" /></p>
    <p :class="estilo">fondo de otro color</p>

    <p :style="{ 'background-color': colorFondo }">
      Cambiando el color de fonto
    </p>
    <q-color v-model="colorFondo" style="width: 80px" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isPrimary = ref(false);
const isDark = ref(false);
const colorFondo = ref("");

const estilo = computed(() => {
  return {
    "bg-dark": isDark.value,
    "text-white": isDark.value,
  };
});
</script>

<style lang="scss" scoped></style>
