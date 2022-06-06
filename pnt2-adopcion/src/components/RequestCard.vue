<template>
  <div class="card" style="width: 16rem; padding-top: 10px; padding-bottom: 10px;">
    <img
      :src="image"
      class="card-img-top"
      alt=""
      style="width: 10rem; max-height:10rem; object-fit: contain; margin-left: auto; margin-right: auto;"
    />
    <div class="card-body">
      <h5 class="card-title" style="text-align: left;">Solicitante: {{ requesterName }}</h5>
      <h5 class="card-title" style="text-align: left;">Mascota Solicitada: {{ petName }}</h5>
      <h5 class="card-title" style="text-align: left;">Estado: {{ status }}</h5>
      <button
        href="#"
        class="btn btn-details"
        style="color: white; background-color: #49ff00"
      >
        Detalle
      </button>
    </div>

    <div class="column" style="margin-bo" v-show="showCommands">
      <button
        class="btn btn-details"
        style="color: white; background-color: red; margin-right:10px"
        v-on:click="onReject"
      >
        Rechazar
      </button>
      <button
        class="btn btn-details"
        style="color: white; background-color: #49ff00; margin-left:10px"
        v-on:click="onConfirm"
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
    id: Number,
    petId: Number,
    petName: String,
    ownerId: Number,
    requesterId: Number,
    requesterName: String,
    image: String,
    showCommands: Boolean,
    status: String,
  },
  methods: {
    onConfirm(){
      console.log("confirm")
      this.$emit('onConfirm', this.id);
    },
    onReject(){
      console.log("reject")
      this.$emit('onReject', this.id);
    },
  }
};
</script>

<style>
</style>
