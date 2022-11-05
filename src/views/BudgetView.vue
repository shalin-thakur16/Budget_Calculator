<template>
    <div class="flex flex-row mx-10 w-[400px]">
    <div class="w-full flex flex-col max-w-xs">
      <h3>Budget</h3>
      <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label 
            class="block text-gray-700 text-sm font-bold mb-2" >
            Please Enter Your Budget</label>
          <input
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Budget"/>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-green-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" >Add Budget</button>
 
        </div>
      </form>
    </div>
    </div>
</template>
