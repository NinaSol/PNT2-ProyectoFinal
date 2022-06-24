<template>
  <div class="container">
    <ProfileDetails
      class="mt-3"
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
  },
};
</script>

<style></style>
