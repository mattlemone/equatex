<template>
  <div class="graph-calculator">
    <input v-model="equation" placeholder="Enter equation (e.g., x^2)">
    <button @click="plotGraph">Plot</button>
    <Line v-if="chartData" :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { calculatePoints } from '@/services/calculatorService'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'GraphCalculator',
  components: { Line },
  data() {
    return {
      equation: '',
      chartData: null,
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'center',
          },
          y: {
            type: 'linear',
            position: 'center',
          }
        }
      }
    }
  },
  methods: {
    async plotGraph() {
      try {
        const points = await calculatePoints(this.equation)
        this.chartData = {
          datasets: [{
            label: this.equation,
            data: points,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      } catch (error) {
        console.error('Error plotting graph:', error)
      }
    }
  }
}
</script>