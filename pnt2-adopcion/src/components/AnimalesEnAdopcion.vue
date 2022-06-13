<template>
  <div>
    <ul class="nav pt-3 pb-3 container opciones">
      <!--iterar-->
      <li class="nav-item">
        <a class="nav-link" @click="setEspecie('todos')" href="#">Todos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="setEspecie('perro')" href="#">Perros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="setEspecie('gato')" href="#">Gatos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="setEspecie('otro')" href="#">Otros</a>
      </li>
    </ul>

    <div class="container">
      <div class="row">
        <div
          class="pb-4 col-lg-3 col-sm-6 col-xs-12"
          v-for="mascota in mascotasFiltradas"
          :key="mascota.id"
        >
          <!--pasar mascota-->
          <AnimalEnAdopcionCard
            :mascota="{
              id: mascota.id,
              name: mascota.name,
              race: mascota.race,
              comment: mascota.comment,
              age: mascota.age,
              image: mascota.image,
            }"
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

    decideViews() {
      if (this.$route.query.userId) {
        this.getMascotas(this.$route.query.userId).then(
          (mascotas) => (this.mascotas = mascotas)
        );
      } else {
        this.getMascotas().then((mascotas) => (this.mascotas = mascotas));
      }
    },
  },

  async created() {
    this.decideViews();

    //this.mascotasFiltradas = results;
  },

  watch: {
    $route: function () {
      this.decideViews();
    },

    mascotas: function () {
      this.mascotasFiltradas = this.mascotas;
    },
    //computed
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
.opciones a {
  color: black !important;
}
</style>
