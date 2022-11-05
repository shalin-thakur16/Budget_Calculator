<template>
    <div class="flex mx-10  w-[400px]">
    <div class="w-full max-w-xs">
      <h3 class="font-bold">Goal</h3>
      <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div class="mb-4">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" >
            Please Enter Your Goal</label>
          <input
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Expense" v-model="goal"/>
        </div>
        <div class="mb-4">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" >
            Please Enter Your Goal Amount</label>
          <input
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Expense Amount" v-model="goal_amount"/>
        </div>
        <div class="mb-4">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" >
            Date/Month</label>
          <input
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Expense Amount" v-model="date"/>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="button-bg-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" v-on:click="addGoal" >Add Goal</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
       goal:"",
       goal_amount:500,
       date:''
    }
  },
  methods:{
    addGoal(e){
      e.preventDefault();

    }
  }
}
</script>
