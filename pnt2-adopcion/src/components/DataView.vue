<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md">
        <div class="card mt-3">
          <PetsPie />
        </div>
      </div>
      <div class="col-md">
        <div class="card mt-3">
          <RequestsLine />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PetsPie from "@/components/PetsPie";
import RequestsLine from "@/components/RequestsLine";

export default {
  components: {
    PetsPie,
    RequestsLine,
  },
};
</script>

<style></style>
