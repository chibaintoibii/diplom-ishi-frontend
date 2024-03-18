<script setup>
const series = [44, 55, 41, 17, 15];
const chartOptions = {
  chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};
</script>
<template>
  <div class="p-4">
    <h2 class="dark:text-white text-sky-900">Haftalik hisobotlar ko'rsatkichi</h2>

    <apexchart width="100%" height="100%" type="donut" :options="chartOptions" :series="series"></apexchart>
    <!--    line-->
    <!--    area-->
    <!--    bar-->
    <!--    pie-->
    <!--    donut-->
    <!--    radialBar-->
    <!--    scatter-->
    <!--    bubble-->
    <!--    heatmap-->
    <!--    candlestick-->
    <!--    boxPlot-->
    <!--    radar-->
    <!--    polarArea-->
    <!--    rangeBar-->
    <!--    rangeArea-->
    <!--    treemap-->
  </div>

</template>