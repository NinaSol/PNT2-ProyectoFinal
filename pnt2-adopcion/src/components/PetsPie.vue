<template>
  <div class="container mt-3">
    <h4>Cantidad de mascotas por tipo actualmente en la app:</h4>
    <hr />
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Perros", "Gatos", "Otros"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    petsCounter(pets) {
      let data = [0, 0, 0];

      for (let i = 0; i < pets.length; i++) {
        if (pets[i].animal == "Perro") {
          data[0] += 1;
        } else if (pets[i].animal == "Gato") {
          data[1] += 1;
        } else {
          data[2] += 1;
        }
      }

      return data;
    },
  },
  async mounted() {
    try {
      const request = await fetch(
        "https://6282faeb92a6a5e4621c22e0.mockapi.io/pnt2/mascota"
      );
      const response = await request.json();
      this.chartData.datasets[0].data = this.petsCounter(response);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
