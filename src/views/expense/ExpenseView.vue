<template>
    <div class="py-2 flex items-center justify-between">
      <div class=" button-bg-color rounded-full px-3 py-2  mr-2 ">
        <div>
          <font-awesome-icon :icon="['fa', 'car']" class="text-white" />
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="font-color-blue text-xl font-bold my-1">{{category}}</div>
          <div class="text-white text-lg font-semibold">
            {{value}}
            <span class="font-color-blue text-lg font-semibold">
              /{{total_value}}
            </span>
          </div>
        </div>

        <div>
            <ProgressBar/>
        </div>
      </div>
      <div class="button-bg-color rounded-full ml-2 w-[70]">
        <font-awesome-icon :icon="['fa', 'greater-than']" class="text-white" />
      </div>
    </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  data(){
    return{
      
      category:"test",
      value:"400",
      total_value:"1000"

    }
  },
  components:{
    ProgressBar,

   
},
//    props:[
//        'value','total_value','category'
// ],
}
</script>
