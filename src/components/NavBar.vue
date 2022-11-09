<template>
    <div class="bg-color py-2">
      <div class="container-wrapper flex item-center justify-between text-white border-bottom py-4">
        <div class="flex items-center justify-between ">
          <div class="px-2">
            <button>
              <div class="w-4 h-0.5 bg-white mb-1"></div>
              <div class="w-4 h-0.5 bg-white mb-1"></div>
              <div class="w-4  h-0.5 bg-white"></div>
            </button>
          </div>
       
            <div class="text-lg uppercase font-semibold">
              Balance :<span className="font-color text-lg ml-2">₹20,000</span>
            </div>
      
        </div>
        <div class="flex items-center justify-between ">
          <div class="mx-2">
            <router-link
            
              to="#"
              class="btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white"
            >
              Daily
            </router-link>
          </div>
          <div class="mx-2">
            <router-link
              to="#"
              class="  btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white "
            >
              Week
            </router-link>
          </div>

          <div class="mx-2">
            <router-link
              to="#"
               class="btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white "
            >
              Month
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>