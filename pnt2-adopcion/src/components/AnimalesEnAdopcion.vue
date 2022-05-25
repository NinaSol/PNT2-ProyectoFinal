<template>
  <div>
    <button class="btn btn-primary" @click="setEspecie('perro')">perros</button>
    <button class="btn btn-primary" @click="setEspecie('gato')">gatos</button>
    <button class="btn btn-primary" @click="setEspecie('otro')">otros</button>
    <button class="btn btn-primary" @click="setEspecie('todos')">todos</button>

    <div class="container">
      <div class="row">
        <div
          class="pb-4 col-lg-3 col-sm-6 col-xs-12"
          v-for="mascota in mascotasFiltradas"
          :key="mascota.id"
        >
          <AnimalEnAdopcionCard
            :id="mascota.id"
            :nombre="mascota.nombre"
            :raza="mascota.raza"
            :comentarios="mascota.comentarios"
            :edad="mascota.edad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimalEnAdopcionCard from "./AnimalEnAdopcionCard.vue";

export default {
  name: "AnimalesEnAdopcion",
  components: {
    AnimalEnAdopcionCard,
  },
  data() {
    return {
      especie: null,
      mascotas: [],
      mascotasFiltradas: [],
      url: "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/mascota",
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/home");
    },
    setEspecie(value) {
      this.especie = value;
    },
  },
  async created() {
    const response = await fetch(this.url);
    const results = await response.json();
    this.mascotas = results;
    //this.mascotasFiltradas = results;
  },
  watch: {
    mascotas: function () {
      this.mascotasFiltradas = this.mascotas;
    },
    especie: function () {
      if (this.especie === "todos") {
        this.mascotasFiltradas = this.mascotas;
      } else {
        this.mascotasFiltradas = this.mascotas.filter((m) =>
          m.especie.toLowerCase().includes(this.especie.toLowerCase())
        );
      }
    },
  },
};
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
