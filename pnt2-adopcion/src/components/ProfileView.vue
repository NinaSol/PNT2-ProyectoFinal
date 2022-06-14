<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <ProfileDetails
          v-if="user"
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
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails.vue";

export default {
  components: {
    ProfileDetails,
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
    console.log(this.user);
  },
};
</script>

<style></style>
