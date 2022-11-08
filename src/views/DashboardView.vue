<template>
  <NavBar/>
<div class="bg-color ">
  <div class="container-wrapper px-2">
          <div class="lg:flex justify-between py-2  ">
            <div class="px-10 grad rounded-2xl w-7/12 ">
              <p class="text-white text-lg font-medium">Expenses</p> 
             <BarChart/>
            </div>
            <div class="px-12 grad rounded-2xl py-1 w-4/12">
                <p class="text-white text-2xl font-semibold text-right mb-8">
                {{currentDate()}}
                </p>
                <div class="border-bottom">
                      <ExpenseView
                        category="Housing"
                        value=7000
                        total_Value=8000
                      />
                      <ExpenseView
                        category="Food"
                        value=1500
                        total_Value=2000
                      />
                      <ExpenseView
                        category="Shopping"
                        value=1000
                        total_Value=1500
                      />
                </div>
            </div>
        </div>
   </div>
  <div class="flex justify-between px-10">
    <div class="  grad rounded-2xl flex flex-col">
      <PieChart/>
    </div>
    <div class="grad rounded-2xl flex flex-col">
      <GoalView/>
    </div>
    <div class="grad rounded-2xl flex flex-col ">
      <IncomeView title="test"
       place="test test test"
       amount="800"/>
       <IncomeView title="test"
       place="test test test"
       amount="800"/>
    </div>
   


  </div>
  <!-- <div class="">
    <IncomeView title="test"
    place="test"
    amount="800"/>
  </div> -->
 
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
