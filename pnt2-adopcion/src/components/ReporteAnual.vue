<template>
  <div style="width: 100%; display: flex; justify-content: center; margin-top: 20px;">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        datasets: [ {label: 'Perros', backgroundColor: '#f87979', data: [1, 2, 5, 5, 6 , 8, 9, 7, 12, 13, 15, 14] }, 
        {label: 'Perros', backgroundColor: '#A8F979',  data: [3, 5, 6, 6, 8 , 9, 7, 12, 13, 15, 14, 19] }, 
        {label: 'Otros', backgroundColor: '#8879F9',  data: [0, 1, 2, 3, 5 , 5, 6, 5, 6, 7, 6, 8] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>