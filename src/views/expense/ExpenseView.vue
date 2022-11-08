<template>
    <div className="py-2 flex items-center justify-between">
      <div className=" button-bg-color rounded-full px-3 py-2  mr-2 ">
        <div></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="font-color-blue text-xl font-bold my-1">{{category}}</div>
          <div className="text-white text-lg font-semibold">
            {{value}}
            <span className="font-color-blue text-lg font-semibold">
              /{{total_value}}
            </span>
          </div>
        </div>

        <div>
            <ProgressBar/>
        </div>
      </div>
      <div className=" button-bg-color rounded-full ml-2 ">
        <font-awesome-icon :icon="['fas', ' fa-regular fa-arrow-right']"/>
        <!-- <font-awesome-icon icon="fa-regular fa-arrow-right" /> -->
      </div>
    </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';
export default {
  components:{
    ProgressBar,

  },
   props:[
       'value','total_value','category'
],
}
</script>
