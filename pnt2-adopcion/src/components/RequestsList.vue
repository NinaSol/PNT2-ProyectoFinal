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
            :id="solicitud.id"
            :petName="solicitud.pet_name"
            :petId="solicitud.pet_id"
            :ownerId="solicitud.owner_id"
            :requesterName="solicitud.requester_name"
            :requesterId="solicitud.requester_id"
            :image="solicitud.image"
            :showCommands="solicitud.showCommands"
            :status="solicitud.status"
            @onConfirm="onConfirm($event, solicitud.id, solicitud.pet_id)"
            @onReject="onReject($event, solicitud.id)"
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
    onConfirm(event, id, petId){
      this.solicitudesAMostrar.forEach(sol => {
        if(sol.id === id){
          sol.status = "CONFIRMED";
          sol.showCommands = false;
        }else{
          if(sol.pet_id === petId){
            sol.status = "REJECTED";
            sol.showCommands = false;
          }
        }
      });
    },
    onReject(event, id){
      this.solicitudesAMostrar.forEach(sol => {
        if(sol.id === id){
          sol.status = "REJECTED"
          sol.showCommands = false;
        }
      });
    } 
  },
  async created() {
    const response = await fetch(this.url);
    const results = await response.json();
    this.solicitudes = results;
  },
  computed:{
    solicitudesAMostrar(){
      let enviadas = this.solicitudes.filter((solicitud) =>
            solicitud.requester_id == localStorage.userId
        );

      enviadas.forEach(element => {
        element.showCommands=false;
      });

      let recibidas = this.solicitudes.filter((solicitud) =>
            solicitud.owner_id == localStorage.userId
        );

      recibidas.forEach(element => {
        element.showCommands=true;
      });

      let aMostrar = []
      if(this.showSent){
        aMostrar.push.apply(aMostrar, enviadas);
      }
      if(this.showReceived){
        aMostrar.push.apply(aMostrar, recibidas);
      }
      return aMostrar;
    }
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
</style>
