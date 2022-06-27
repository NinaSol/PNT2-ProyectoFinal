<template>
  <div class="card" style="width: 16rem; padding-top: 10px; padding-bottom: 10px;">
    <div class="pt-1">
      <img
        :src="image"
        class="card-img-top"
        alt=""
        style="width: 15rem;"
      />
    </div>
    <div class="card-body">
      <p class="card-title" style="text-align: left;">Solicitante: {{ requesterName }}</p>
      <p class="card-title" style="text-align: left;">Mascota Solicitada: {{ petName }}</p>
      <p class="card-title" style="text-align: left;">Estado: {{ status }}</p>
      <!--<button
        href="#"
        class="btn btn-details"
        style="color: white; background-color: #439c1e"
      >
        Detalle
      </button>
      -->
    </div>

    <div class="column" style="margin-bo" v-show="showCommands">
      <button
        class="btn btn-details"
        style="color: white; background-color: #E91224; margin-right:10px"
        v-on:click="onReject"
      >
        Rechazar
      </button>
      <button
        class="btn btn-details"
        style="color: white; background-color: #007AD9; margin-left:10px"
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
      this.$emit('onConfirm', this.id, this.petId, this.status);
    },
    onReject(){
      this.$emit('onReject', this.id);
    },
  }
};
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.card-img-top {
  border-radius: 2.5px;
}
.card {
  box-shadow: 0px 0px 21px 3px rgba(0, 0, 0, 0.23);
}
</style>
