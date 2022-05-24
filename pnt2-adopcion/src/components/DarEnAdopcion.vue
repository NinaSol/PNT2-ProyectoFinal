<template>
  <div class="container">
    <form @submit.prevent="agregarAnimal">
      <h2>Dar en adopcion</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="nombre" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Edad</label>
            <input type="number" class="form-control" v-model="edad" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Raza</label>
            <input type="text" class="form-control" v-model="raza" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>Comentarios</label>
            <input type="text" class="form-control" v-model="comentarios" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Vacunas</label>
            <input type="text" class="form-control" v-model="vacunas" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="url">Imagen <small>Ingrese url</small></label>
            <input
              type="url"
              class="form-control"
              placeholder="url"
              v-model="imagen"
            />
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4">
          <label for="contact-preference">Esta castrad@?</label>
          <div class="radio">
            <label>
              <input
                type="radio"
                name="castrado"
                value="si"
                checked
                v-model="castrado"
              />Si
            </label>
          </div>
          <div class="radio">
            <label>
              <input
                type="radio"
                name="castrado"
                value="no"
                checked
                v-model="castrado"
              />No
            </label>
          </div>
        </div>
        <div class="col-md-4">
          <select v-model="especie">
            <option disabled value="">Elija una opcion</option>
            <option>Perro</option>
            <option>Gato</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Dar en adopcion</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DarEnAdopcion",
  data() {
    return {
      nombre: null,
      raza: null,
      edad: null,
      comentarios: null,
      castrado: null,
      vacunas: null,
      imagen: null,
      especie: "",
      url: "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/mascota",
    };
  },
  methods: {
    async agregarAnimal() {
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: this.nombre,
          edad: parseInt(this.edad),
          castrado: this.castrado === "si" ? true : false,
          vacunas: [this.vacunas],
          comentarios: this.comentarios,
          especie: this.especie,
          raza: this.raza,
          idDuenio: null,
          buscaDuenio: true,
          imagen: this.imagen,
        }),
      });
      const data = await response.json();

      console.log(data);
    },
  },
  async created() {},
  watch: {
    agregarAnimal() {
      this.$refs["nombre"].value = "";
      this.$refs["raza"].value = "";
      this.$refs["edad"].value = "";
      this.$refs["castrado"].value = "";
      this.$refs["vacunas"].value = "";
      this.$refs["comentarios"].value = "";
      this.$refs["especie"].value = "";
      this.$refs["imagen"].value = "";
    },
  },
};
</script>

<style></style>
