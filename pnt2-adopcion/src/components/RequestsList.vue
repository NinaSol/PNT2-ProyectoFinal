<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="pb-4 col-lg-3 col-sm-6 col-xs-12"
          v-for="mascota in mascotasFiltradas"
          :key="mascota.id"
        >
          <RequestCard
            :nombre="mascota.nombre"
            :raza="mascota.raza"
            :comentarios="mascota.comentarios"
            :edad="mascota.edad"
            :image="mascota.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestCard from "./RequestCard.vue";

export default {
  name: "AnimalesEnAdopcion",
  components: {
    RequestCard,
  },
  data() {
    return {
      especie: null,
      mascotas: [],
      mascotasFiltradas: [],
      url: "https://628e8b6ea339dfef87afd02f.mockapi.io/pnt2/requests",
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
    console.log(results)
    this.mascotas = results;
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
