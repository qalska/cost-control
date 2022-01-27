<template>
  <div>
    <canvas class="chart" ref="canvas"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([ 'categoriesTitles', 'categoriesTotals' ]),
  watch: {
    categoriesTotals: function (val) {
      chart.data.datasets = newDatasets;
      chart.update();
    }
  },
  mounted() {
      let chart = new Chart(this.$refs.canvas, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.categoriesTotals,
            backgroundColor: [
              '#FFCC00', '#FF6600', '#CC0000', '#CC0066', '#6600CC', '#3300CC', '#666699', '#006666', '#006633', '#666600', '#666666'
            ]
          }],
          labels: this.categoriesTitles
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          }
        },
      })
  }
}
</script>

<style>
  .chart {
    width: 500px;
    margin-top: 1.2em;
  }
</style>