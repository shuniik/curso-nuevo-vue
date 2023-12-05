<template>
  <q-page>
    <div class="row justity-center">
      <div class="col-3">
        <q-input
          v-model="dato1.contador"
          label="contador:"
          type="number"
          outlined=""
        />
      </div>
    </div>

    <div class="row justity-center">
      <div class="col-3">
        <q-btn
          label="Guardar"
          color="primary"
          @click="guardarDato1"
          class="q-mt-md"
        >
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";

const $q = useQuasar();

const dato1 = ref({
  contador: 0,
});

function guardarDato1() {
  try {
    localStorage.setItem("dato1", JSON.stringify(dato1.value));
    $q.notify({
      color: "positive",
      message: "Dato guardado correctamente",
      icon: "done",
    });
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Error al guardar el dato",
      icon: "report_problem",
    });
  }
}

function leerDato1() {
  try {
    const dato1Local = localStorage.getItem("dato1");
    if (dato1Local) {
      dato1.value = JSON.parse(dato1Local);
    }
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Error al leer el dato",
      icon: "report_problem",
    });
  }
}

onMounted(() => {
  leerDato1();
});
</script>

<style lang="scss" scoped></style>
