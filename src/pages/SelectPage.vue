<template>
  <q-page class="q-ma-lg">
    <div class="row">
      <q-btn @click="obtener" color="primary">Obtener</q-btn>
      <q-btn @click="obtener10" color="primary">Obtener10</q-btn>
      <q-btn @click="obtenerMujeres" color="primary"
        >Obtener solo mujeres</q-btn
      >
    </div>
    <div class="row">
      <q-card v-for="item in datos" :key="item.id" class="col-6 col-sm-3">
        <q-card-section>
          <q-img :src="item.picture.medium" style="max-width: 100px" />
        </q-card-section>
        <q-card-actions>
          <q-card-title
            >{{ item.name.first }} {{ item.name.last }}
          </q-card-title>
          <q-card-main>
            <p>Email: {{ item.email }}</p>
            <p>Phone: {{ item.phone }}</p>
            <p>
              Location: {{ item.location.city }}, Country:
              {{ item.location.country }}
            </p>
          </q-card-main>
        </q-card-actions>
      </q-card>
    </div>

    <div v-if="errores" class="q-pa-md">
      <div class="row q-gutter-sm">
        <q-btn
          no-caps
          unelevated
          color="negative"
          @click="triggerNegative"
          label="Trigger 'negative'"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { apiRU } from "src/boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const datos = ref([]);
const errores = ref([]);

function triggerNegative(mensaje) {
  $q.notify({
    type: "negative",
    message: mensaje,
  });
}

function obtener() {
  apiRU
    .get("eree")
    .then((Response) => {
      console.log(Response);
      datos.value = Response.data.results;
    })
    .catch((error) => {
      console.log(error);
      triggerNegative("Hubo un error: " + error.message);
    });
}

function obtener10() {
  apiRU
    .get("", {
      params: {
        results: 10,
      },
    })
    .then((Response) => {
      console.log(Response.data);
      datos.value = Response.data.results;
    })
    .catch((error) => {
      console.log("holamundo", error);
      errores.value = error.error;
    });
}
function obtenerMujeres() {
  apiRU
    .get("", {
      params: {
        results: 10,
        gender: "female",
      },
    })
    .then((Response) => {
      console.log(Response.data);
      datos.value = Response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<style lang="scss" scoped></style>
