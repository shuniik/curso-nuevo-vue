<template>
  <div>
    <slot></slot>

    <strong> {{ propiedades.nombre }} </strong>
    {{ propiedades.completado }}

    <q-btn
      @click="$emit('eliminar', propiedades.nombre)"
      icon="delete"
      size="sm"
      round
    ></q-btn>
  </div>
</template>

<script setup>
// const propiedades = defineProps(["nombre", "completado"]);

const propiedades = defineProps({
  nombre: String,
  completado: {
    type: Boolean,
    default: false,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
