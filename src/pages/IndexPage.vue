<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <p>
      <q-btn class="bg-warning" to="/cuckivuda">Ir ciclo de vida</q-btn>
      <q-btn class="bg-green-10">uno</q-btn>
      <q-btn class="bg-pink-5">dos</q-btn>
      <q-btn class="bg-blue-5">tres</q-btn>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
