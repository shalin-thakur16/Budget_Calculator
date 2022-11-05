<template>
  <NavBar/>
<div className="bg-color ">
  <div className="container-wrapper px-2">
          <div className="lg:flex justify-between py-2  ">
            <div className="px-10 grad rounded-2xl w-7/12 ">
              <p className="text-white text-lg font-medium">Expenses</p> 
             <BarChart/>
            </div>
            <div className="px-12 grad rounded-2xl py-1 w-4/12">
              <p className="text-white text-3xl font-semibold text-right mb-8">
               {{currentDate()}}
              </p>
              <div className="border-bottom">
                <ExpenseView
                  category="Transport"
                  value=20
                  total_Value=100
                />
                <ExpenseView
                  category="Food"
                  value=20
                  total_Value=100
                />
                <ExpenseView
                  category="Shopping"
                  value=500
                  total_Value=700
                />
        
        
              </div>
            </div>
          </div>
          </div>
  
    </div>
    <IncomeView
                  amount=600
                  place="zasya"
                 title ="salary"
                />


</template>


<script>
import NavBar from '@/components/NavBar.vue';
import BarChart from './BarChart.vue';
import ExpenseView from './ExpenseView.vue';
import IncomeView from './IncomeView.vue';
export default {
  data(){
    return{
    
    }
  },
  components:{
    NavBar,
    BarChart,
    IncomeView,
    ExpenseView
},
methods:{
  currentDate(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return date;
  }
}

     
};


</script>
