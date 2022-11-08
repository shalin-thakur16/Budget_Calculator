<template>
    <apexchart 
     width="430" type="bar" 
     :options="options" :series="series">
   </apexchart> 
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [
           "M","T","w","T","F","S"
        ]
      }
    },
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72]
    }]
  })
}
</script>