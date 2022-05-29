<template>
  <div class="card" style="width: 16rem">
    <div style="width: 18rem">
      <img
        src="https://www.diarioveterinario.com/images/showid2/3192567?w=900"
        class="card-img-top"
        alt=""
        style="width: 16rem"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}, {{ age }}, {{ race }}</h5>
      <p class="card-text">
        {{ comment }}
      </p>
      <button
        href="#"
        class="btn btn-details"
        style="color: white; background-color: #49ff00"
      >
        <router-link :to="{ name: 'detalleMascota', params: { id: id } }"
          >Quiero ver más</router-link
        >
      </button>
    </div>
  </div>
  <!-- <router-view></router-view>
    <button type="button" class="btn btn-primary mt-2" @click="navigateToHome">
      Volver a Home
    </button>-->
</template>

<script>
export default {
  name: "AnimalEnAdopcionCard",
  props: {
    id: String,
    name: String,
    race: String,
    age: Number,
    comment: String,
  },
  methods: {
    navigateToHome() {
      console.log("en este momento podemos realizar una o varias acciones...");
      this.$router.push("/home");
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
