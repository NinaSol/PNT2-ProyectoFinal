<template>
  <div class="card" style="width: 16rem; padding-top: 10px; padding-bottom: 10px;">
    <img
      :src="image"
      class="card-img-top"
      alt=""
      style="width: 10rem; max-height:10rem; object-fit: contain; margin-left: auto; margin-right: auto;"
    />
    <div class="card-body">
      <h5 class="card-title">{{ nombre }}, {{ edad }}, {{ raza }}</h5>
      <p class="card-text">
        {{ comentarios }}
      </p>
      <button
        href="#"
        class="btn btn-details"
        style="color: white; background-color: #49ff00"
      >
        Quiero ver mas
      </button>
    </div>

    <div class="column" style="margin-bo">
      <button
        class="btn btn-details"
        style="color: white; background-color: red; margin-right:10px"
        v-on:click="Reject"
      >
        Rechazar
      </button>
      <button
        class="btn btn-details"
        style="color: white; background-color: #49ff00; margin-left:10px"
        v-on:click="Confirm"
      >
        Confirmar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestCard",
  props: {
    nombre: String,
    raza: String,
    edad: Number,
    comentarios: String,
    image: String,
  },
  methods: {
    Reject(){
      console.log("Rejected")
    },
    Confirm(){
      console.log("Confirmed")
    }
  },
};
</script>

<style>
</style>
