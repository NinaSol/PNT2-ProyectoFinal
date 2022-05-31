<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item" v-show="isLoged()">
          <a class="nav-link" href="/mascotas">Mis Mascotas</a>
        </li>
        <li class="nav-item" v-show="isLoged()">
          <a class="nav-link" href="/solicitudes">Solicitudes</a>
        </li>
      </ul>
      
      <div v-show="isLoged()">
        <a class="nav-link" href="/dar-adopcion">Dar en adopcion</a>
      </div>
      <div v-show="isLoged()">
        <a class="nav-link" href="/profile">{{ this.user }}</a>
      </div>
      <div v-show="isLoged()">
        <a class="nav-link" href="/" v-on:click="logout">log out</a>
      </div>
      <div v-show="!isLoged()">
        <a class="nav-link" href="/login">login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name: "NavBar",
  data(){
    return{
      user: '',
    };
  },
  mounted() {
    if (localStorage.name){
      this.user = localStorage.name;
      console.log(this.user);
      console.log(localStorage.name);
    }
  },
  methods:{
    isLoged(){
      return this.user && this.user !== "";
    },
    logout(){
      localStorage.name = ''
    }
  },

  computed:{
    sarlanga() {
      return this.user && this.user !== "";
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-right{
  float: right;
}
.mr-auto{
  margin-right: auto;
}
</style>
