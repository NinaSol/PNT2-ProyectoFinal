<template>
  <div class="container detail shadow-lg" v-if="mascotaExists">
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3 mt-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                :src="mascota.image"
                alt="Admin"
                class="rounded-circle"
                width="150"
              />
              <div class="mt-3">
                <h4>{{ mascota.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 mt-3">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Edad</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ mascota.age }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Castrado</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ mascota.isCastrated ? "Sí" : "No" }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Raza</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ mascota.race }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Vacunado</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ mascota.isVaccinated ? "Sí" : "No" }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Comentario</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ mascota.comment }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <template v-if="mascota.looksForOwner">
                  <router-link
                    class="btn"
                    style="background-color: #439c1e; color: #fff"
                    to="/"
                    >Solicitar Adopción</router-link
                  >
                </template>
                <router-link class="btn ms-2" style="color: #439c1e" to="/"
                  >Volver</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mascota: null,
    };
  },

  async created() {
    const response = await fetch(
      "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/mascota/" +
        this.$route.params.id
    );
    const result = await response.json();
    this.mascota = result;
  },
  computed: {
    mascotaExists() {
      return this.mascota ? true : false;
    },
  },
};
</script>

<style>
.detail {
  margin-top: 6rem;
}
</style>
