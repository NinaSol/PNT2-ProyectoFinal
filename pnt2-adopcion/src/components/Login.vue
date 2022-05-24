<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow-lg rounded-lg my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Iniciar Sesión
            </h5>
            <form @submit="validarForm">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Usuario"
                  v-model="user"
                />
                <label for="floatingInput">Usuario</label>
                <p class="text-danger">{{ watchErrorUser }}</p>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Dirección de correo electrónico"
                  v-model="email"
                />
                <label for="floatingInput"
                  >Dirección de correo electrónico</label
                >
                <p class="text-danger">{{ watchErrorMail }}</p>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  v-model="pass"
                />
                <label for="floatingPassword">Contraseña</label>
                <p class="text-danger">{{ watchErrorPass }}</p>
              </div>

              <div class="d-flex flex-row mb-4">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="ps-2" for="defaultCheck1">
                  Recordar Contraseña
                </label>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary btn-login" type="submit">
                  Ingresar
                </button>
              </div>
              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/userStore";

export default {
  name: "AppLogin",

  setup() {
    const store = useStore();
    return { store };
  },

  data() {
    return {
      errorMail: [],
      errorPass: [],
      errorUser: [],
      user: null,
      email: null,
      pass: null,
    };
  },

  methods: {
    validarForm(e) {
      this.errorMail = [];
      this.errorPass = [];
      this.errorUser = [];

      if (!this.user) {
        if (this.errorUser.length == 0) {
          this.errorUser.push("Usuario requerido");
        }
      }
      if (!this.email) {
        if (this.errorMail.length == 0) {
          this.errorMail.push("Email requerido");
        }
      } else if (!this.validarEmail(this.email)) {
        if (this.errorMail.length == 0) {
          this.errorMail.push("Ingrese una email válido");
        }
      }
      if (!this.pass) {
        if (this.errorPass.length == 0) {
          this.errorPass.push("Contraseña requerida");
        }
      }

      if (!this.errorMail.length && !this.errorPass.length) {
        //validado correctamente
        localStorage.name = this.user;
        this.store.setUserName(this.user);
        this.store.setUserEmail(this.email);
        this.$router.push({path:'/'});
        return true;
      }

      e.preventDefault();
    },

    validarEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },

  computed: {
    watchErrorMail() {
      return this.errorMail.length ? this.errorMail.toString() : "";
    },

    watchErrorPass() {
      return this.errorPass.length ? this.errorPass.toString() : "";
    },

    watchErrorUser() {
      return this.errorUser.length ? this.errorUser.toString() : "";
    },
  },
};
</script>

<style></style>
