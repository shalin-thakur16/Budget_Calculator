<template>
  <p class="text-white text-lg font-semibold">
                 The highest expense
               </p>
 <apexchart 
           width="350" type="pie" 
       :options="chartOptions" :series="series">
  </apexchart>  

</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data(){
   return{
       series: [40,20,60],
       chartOptions: {
           chart: {
             width: 100,
             type: 'pie',
           },
           labels: ['Housing', 'Transport','Healthcare'],

           responsive: [{
             breakpoint: 20,
             options: {
               chart: {
                 width: 100
               },
               legend: {
                 show: 'false'
               },
             fill: {
               colors: ["#23d7be", "#5e17a5", "#231882"],
             },
             }
           }]
       }
   }
}

}
</script>