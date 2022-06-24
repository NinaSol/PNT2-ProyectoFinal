<template v-if="user">
  <div class="container">
    <ProfileDetails
      class="mt-4"
      :user="{
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        userName: user.userName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
      }"
    />
    <hr />
    <div class="row">
      <h3>Tu actividad:</h3>
      <div class="col">
        <PetsPie
          :user="{
            id: user.id,
          }"
        />
      </div>
      <div class="vr"></div>
      <div class="col">
        <LineChart title="Solicitudes de Adopción:" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails.vue";
import PetsPie from "@/components/PetsPie.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    ProfileDetails,
    PetsPie,
    LineChart,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const request = await fetch(
      "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/users?id=" +
        localStorage.id
    );
    const response = await request.json();
    this.user = response[0];
  },
};
</script>

<style></style>
