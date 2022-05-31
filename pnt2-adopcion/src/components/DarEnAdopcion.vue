<template>
  <div class="container detail shadow-lg p-2">
    <form @submit.prevent="agregarAnimal">
      <h2>Dar en adopcion</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Edad en años</label>
            <input type="number" class="form-control" v-model="age" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Raza</label>
            <input type="text" class="form-control" v-model="race" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>Comentarios</label>
            <input type="text" class="form-control" v-model="comment" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="url">Imagen <small>Ingrese url</small></label>
            <input
              type="url"
              class="form-control"
              placeholder="url"
              v-model="image"
            />
          </div>
        </div>
        <div class="col-md-4">
          <label class="mt-3" for="contact-preference">Esta vacunad@?</label>
          <div class="row-radio">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="castrado"
                  value="si"
                  checked
                  v-model="isVaccinated"
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
                  v-model="items"
                />No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4">
          <label for="contact-preference">Esta castrad@?</label>
          <div class="row-radio">
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="castrado"
                  value="si"
                  checked
                  v-model="isCastrated"
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
                  v-model="isCastrated"
                />No
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <select v-model="animal" class="select-animal">
            <option disabled value="">Elija una opcion</option>
            <option>Perro</option>
            <option>Gato</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        class="btn m-3"
        style="background-color: #439c1e; color: #fff"
      >
        Dar en adopcion
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DarEnAdopcion",
  data() {
    return {
      name: null,
      race: null,
      age: null,
      comment: null,
      isCastrated: null,
      isVaccinated: null,
      image: null,
      animal: "",
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
          name: this.nombre,
          age: parseInt(this.age),
          isCastrated: this.isCastrated === "si" ? true : false,
          isVaccinated: this.isVaccinated === "si" ? true : false,
          comment: this.comment,
          animal: this.animal,
          race: this.race,
          userId: null,
          looksForOwner: true,
          image: this.image,
        }),
      });
      const data = await response.json();

      console.log(data);
    },
  },
  async created() {},
  watch: {
    agregarAnimal() {
      this.$refs["name"].value = "";
      this.$refs["race"].value = "";
      this.$refs["age"].value = "";
      this.$refs["isCastrated"].value = "";
      this.$refs["isVaccinated"].value = "";
      this.$refs["comment"].value = "";
      this.$refs["animal"].value = "";
      this.$refs["image"].value = "";
    },
  },
};
</script>

<style>
.row-radio {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.radio {
  padding: 5px;
}
.select-animal {
  border: solid 0.5px rgba(0, 0, 0, 0.185);
  border-radius: 5px;
  padding: 3px;
}
</style>
