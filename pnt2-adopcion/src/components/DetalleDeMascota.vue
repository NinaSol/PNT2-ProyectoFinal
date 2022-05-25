<template>
  <div class="container shadow-lg" v-if="mascotaExists">
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                :src="mascota.imagen"
                alt="Admin"
                class="rounded-circle"
                width="150"
              />
              <div class="mt-3">
                <h4>{{ mascota.nombre }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Edad</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ mascota.edad }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Castrado</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ mascota.castrado ? "Sí" : "No" }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Raza</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ mascota.raza }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Vacunas</h6>
              </div>
              <div class="col-sm-9 text-secondary">{{ mascota.vacunas }}</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Comentario</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                {{ mascota.comentarios }}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <template v-if="mascota.buscaDuenio">
                  <router-link class="btn btn-primary" to="/"
                    >Solicitar Adopción</router-link
                  >
                </template>
                <router-link class="btn btn-secondary ms-2" to="/"
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

<style></style>
