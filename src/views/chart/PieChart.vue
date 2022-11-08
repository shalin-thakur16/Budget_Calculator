<template>
    <div class="">
        <p class="text-white px-2 font-semibold">The Highest Expenses</p>
        <apexchart 
            width="350" type="pie" 
        :options="chartOptions" :series="series">
        </apexchart>  
    </div>
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
                  position: 'bottom'
                }
              }
            }]
        }
    }
 }

 }
 </script>