<template>
  <div>
    <div
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
      "
    >
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :width="width"
        :height="height"
      />
    </div>

    <div v-for="(type, index) in types" :key="type.type">
      <div class="container">
        <div class="row pt-3" style="background: #f8f9fa">
          <div
            class="col-10 offset-1 col-sm-8 offset-sm-2 col-md-10 offset-md-1 px-0"
          >
            <div class="form-group">
              <label
                class="rangeLabel"
                for="customRange2"
                style="padding-right: 40px"
                >{{ type.type }}</label
              >
              <input
                type="range"
                class="custom-range"
                min="0"
                max="2"
                id="customRange2"
                v-model="type.value"
                @change="updateValues(index)"
              />
            </div>
            <div class="la-wrapper">
              <p>Bajo</p>
              <p>Medio</p>
              <p>Alto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      types: [
        { type: "Perros", value: 0, values: this.generateRandomValues(0) },
        { type: "Gatos", value: 0, values: this.generateRandomValues(0) },
        { type: "Otros", value: 0, values: this.generateRandomValues(0) },
      ],
    };
  },
  methods: {
    generateRandomValues(amount) {
      let list = [];
      for (let i = 0; i < 12; i++) {
        let min = Math.ceil(5 * amount);
        let max = Math.floor(10 * amount + 10);
        list.push(Math.floor(Math.random() * (max - min) + min) + i);
      }
      return list;
    },
    updateValues(index) {
      console.log(index);
      this.types[index].values = this.generateRandomValues(
        this.types[index].value
      );
    },
  },
  computed: {
    chartData() {
      return {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        datasets: [
          {
            label: this.types[0].type,
            backgroundColor: "#f87979",
            data: this.types[0].values,
          },
          {
            label: this.types[1].type,
            backgroundColor: "#A8F979",
            data: this.types[1].values,
          },
          {
            label: this.types[2].type,
            backgroundColor: "#8879F9",
            data: this.types[2].values,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
      };
    },
  },
};
</script>

<style>
.container {
  margin-bottom: 10px;
}
.la-wrapper {
  display: flex;
  justify-content: center;
}
.la-wrapper p {
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
}

.rangeLabel {
  display: flex;
}
</style>
