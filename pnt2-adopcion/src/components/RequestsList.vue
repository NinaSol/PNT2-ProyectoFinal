<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="pb-4 col-lg-3 col-sm-6 col-xs-12"
          v-for="solicitud in solicitudesAMostrar"
          :key="solicitud.id"
        >
          <RequestCard
            :petName="solicitud.pet_name"
            :petId="solicitud.pet_id"
            :ownerId="solicitud.owner_id"
            :requesterName="solicitud.requester_name"
            :requesterId="solicitud.requester_id"
            :image="solicitud.image"
            :showCommands="solicitud.showCommands"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestCard from "./RequestCard.vue";

export default {
  name: "RequestList",
  props:{
    showSent: Boolean,
    showReceived: Boolean
  },
  components: {
    RequestCard,
  },
  data() {
    return {
      especie: null,
      solicitudes: [],
      solicitudesEnviadas: [],
      solicitudesRecibidas: [],
      solicitudesAMostrar: [],
      url: "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/solicitudes",
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
    this.solicitudes = results;
  },
  watch: {
    solicitudes: function () {
      this.solicitudesEnviadas = this.solicitudes.filter((solicitud) =>
            solicitud.requester_id == localStorage.userId
        );

      this.solicitudesEnviadas.forEach(element => {
        element.showCommands=false;
      });

      this.solicitudesRecibidas = this.solicitudes.filter((solicitud) =>
            solicitud.owner_id == localStorage.userId
        );

      this.solicitudesRecibidas.forEach(element => {
        element.showCommands=true;
      });

      if(this.showSent){
        this.solicitudesAMostrar.push.apply(this.solicitudesAMostrar,this.solicitudesEnviadas);
      }
      if(this.showReceived){
        this.solicitudesAMostrar.push.apply(this.solicitudesAMostrar,this.solicitudesRecibidas);
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
