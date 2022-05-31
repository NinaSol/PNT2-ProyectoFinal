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
            :name="mascota.name"
            :race="mascota.race"
            :comment="mascota.comment"
            :age="mascota.age"
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
    async getMascotas(userId) {
      let newUrl = this.url;

      if (typeof userId !== "undefined") {
        newUrl = this.url + "?userId=" + userId;
      }
      const response = await fetch(newUrl);
      const results = await response.json();
      return results;
    },
  },
  async created() {
    this.getMascotas().then((mascotas) => (this.mascotas = mascotas));

    //this.mascotasFiltradas = results;
  },
  watch: {
    $route: function () {
      if (this.$route.params.userId) {
        this.getMascotas(this.$route.params.userId).then(
          (mascotas) => (this.mascotas = mascotas)
        );
      }
    },

    mascotas: function () {
      this.mascotasFiltradas = this.mascotas;
    },
    especie: function () {
      if (this.especie === "todos") {
        this.mascotasFiltradas = this.mascotas;
      } else {
        this.mascotasFiltradas = this.mascotas.filter((m) =>
          m.animal.toLowerCase().includes(this.especie.toLowerCase())
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
