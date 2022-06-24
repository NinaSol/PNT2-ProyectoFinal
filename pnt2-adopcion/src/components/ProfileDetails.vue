<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: 0.5rem">
          <div class="row g-0">
            <div
              class="col-md-4 gradient-custom text-center"
              style="
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
              "
            >
              <img
                src="../assets/default-user-icon.jpg"
                alt="Avatar"
                class="img-fluid my-5"
                style="width: 80px"
              />
              <h4>{{ user.userName }}</h4>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h5>Perfil</h5>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Nombre</h6>
                    <p class="text-muted">
                      {{ user.name + " " + user.lastName }}
                    </p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Teléfono</h6>
                    <p class="text-muted">{{ user.phoneNumber }}</p>
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Dirección</h6>
                    <p class="text-muted">{{ user.address }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ user.email }}</p>
                  </div>
                </div>
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
  props: {
    user: Object,
  },
};
</script>

<style></style>
