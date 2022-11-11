<template>
  <NavBar/>
 <div class="bg-color ">
   <div class="container-wrapper  px-4 ">

     <div class="lg:flex justify-between   ">
       <div class="px-2 lg:px-10 grad rounded-2xl w-full lg:w-8/12 ">
         <p class="text-white text-lg font-medium">Expenses</p>
         <BarChart />
       </div>

       <div class="px-2 lg:px-12 grad rounded-2xl py-1 w-full lg:w-4/12 lg:ml-2 my-2 lg:my-0">
         <p class="text-white text-3xl font-semibold text-right mb-8">
         {{currentDate()}}  
         </p>
         <div class="border-bottom">
           <ExpenseView />
         </div>
         <div class="text-center  my-6">
           <button class="py-2 px-6 font-color-blue bg-btn rounded-full text-base font-bold">
             Add Expense
           </button>
         </div>
       </div>
     </div>
   </div>

<div class="lg:flex justify-between lg:py-2  ">
       <div class="px-4 grad rounded-2xl w-full lg:w-1/3  my-3 py-3">
         <div class="flex justify-between items-center">
      
       
         </div>
         <div>
           <PieChart />
         </div>
       </div>

       <div class="px-4 grad rounded-2xl w-full lg:w-1/3 lg:mx-2  my-3 py-3">
         <GoalView />
       </div>

       <div class="px-4 grad rounded-2xl w-full lg:w-1/3   my-3 py-3">
         <div class="flex justify-between items-center">
           <p class="text-white text-lg font-semibold">Income </p>
           <p class="button-bg-color rounded-full px-2 py-2">
       
           </p>
         </div>
         <div class="mt-3 ">
           <IncomeView />
         </div>
       </div>
     </div>
   </div>
 
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BarChart from './chart/BarChart.vue';
import PieChart from './chart/PieChart.vue';
import ExpenseView from './expense/ExpenseView.vue';
import GoalView from './GoalView.vue';
import IncomeView from './IncomeView.vue';
export default {
data(){
return{

}
},
components:{
NavBar,
BarChart,
PieChart,
ExpenseView,
GoalView,
IncomeView
},
methods:{
currentDate(){
const today = new Date();
var month = today.toLocaleString('default', { month: 'short',day: 'numeric' });
return month;
}
}

};

</script>