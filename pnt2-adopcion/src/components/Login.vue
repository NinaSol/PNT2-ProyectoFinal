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
                <p class="text-danger">{{ errorUser }}</p>
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
                <p class="text-danger">{{ errorMail }}</p>
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
                <p class="text-danger">{{ errorPass }}</p>
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
              <div class="d-grid">
                <a href="/" v-on:click="loginAsGuest">Login as guest</a>
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
      errorMail: null,
      errorPass: null,
      errorUser: null,
      user: null,
      email: null,
      pass: null,
    };
  },

  methods: {
    validarForm(e) {
      !this.user
        ? (this.errorUser = "Usuario requerido")
        : (this.errorUser = "");

      !this.email
        ? (this.errorMail = "Email requerido")
        : (this.errorMail = "");

      !this.validarEmail(this.email)
        ? (this.errorMail = "Ingrese una email válido")
        : (this.errorMail = "");

      !this.pass
        ? (this.errorPass = "Contraseña requerida")
        : (this.errorPass = "");

      if (
        this.errorMail === "" &&
        this.errorPass === "" &&
        this.errorUser === ""
      ) {
        this.getUser(this.user)
          .then((user) => this.userValidated(user))
          .catch(() => this.userNotValidated());
      }

      e.preventDefault();
    },

    userValidated(user) {
      localStorage.name = user.name + " " + user.lastName;
      localStorage.id = user.id;
      this.store.setUserName(user.userName);
      this.store.setUserEmail(user.email);
      this.$router.push({ path: "/" });
    },

    userNotValidated() {
      this.errorUser = "Usuario no encontrado";
      this.email = "";
      this.pass = "";
    },

    async getUser(userName) {
      let user = null;
      const response = await fetch(
        "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/users?userName=" +
          userName
      );
      const results = await response.json();

      if (results != null && results.length == 1) {
        if (results[0].email == this.email) {
          user = results[0];
        }
      }

      return user;
    },

    validarEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    loginAsGuest() {
      localStorage.name = "Guest";
      localStorage.userId = 1;
    },
  },
};
</script>

<style></style>
