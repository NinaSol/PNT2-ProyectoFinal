<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
          <!-- <a class="nav-link" href="/">Home</a> -->
        </li>
        <li class="nav-item" v-show="isLoged()">
          <router-link
            class="nav-link"
            :to="{ name: 'misMascotas', query: { userId: this.userId } }"
            >Mis mascotas</router-link
          >
        </li>
        <li class="nav-item" v-show="isLoged()">
          <router-link class="nav-link" to="/solicitudes-recibidas"
            >Solicitudes Recibidas</router-link
          >
        </li>
        <li class="nav-item" v-show="isLoged()">
          <router-link class="nav-link" to="/solicitudes-enviadas"
            >Solicitudes Enviadas</router-link
          >
        </li>
        <li class="nav-item" v-show="isLoged()">
          <router-link class="nav-link" to="/dar-adopcion"
            >Dar en adopción</router-link
          >
        </li>
      </ul>

      <div v-show="isLoged()">
        <router-link class="nav-link" to="/profile">{{
          this.user
        }}</router-link>
      </div>
      <div v-show="isLoged()">
        <a class="nav-link" href="/" v-on:click="logout">log out</a>
      </div>
      <div v-show="!isLoged()">
        <router-link class="nav-link" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: "",
      userId: null,
    };
  },
  mounted() {
    if (localStorage.name) {
      this.user = localStorage.name;
      this.userId = localStorage.id;
    }
  },
  methods: {
    isLoged() {
      return this.user && this.user !== "";
    },
    logout() {
      localStorage.name = "";
    },
  },

  computed: {
    sarlanga() {
      return this.user && this.user !== "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-right {
  float: right;
}
.mr-auto {
  margin-right: auto;
}
.navbar {
  background-color: #439c1e;
}
</style>
