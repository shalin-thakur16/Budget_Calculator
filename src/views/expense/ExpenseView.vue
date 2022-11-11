<template>
    <div class="py-2 flex items-center justify-between" v-for="item in income" :key="item.id">
      <div class=" button-bg-color rounded-full px-3 py-2  mr-2">
        <div>
          <font-awesome-icon :icon=item.icon class="text-white" />
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="font-color-blue text-xl font-bold my-1">{{item.category}}</div>
          <div class="text-white text-lg font-semibold">
            {{item.value}}
            <span class="font-color-blue text-lg font-semibold">
              /{{item.total_value}}
            </span>
          </div>
        </div>

        <div>
            <ProgressBar/>
        </div>
      </div>
      <p class="button-bg-color rounded-full px-2 py-2 ml-20">
        <font-awesome-icon :icon="['fa', 'greater-than']" class="text-white" />
     </p>
    </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  data(){
    return{
      income:[
        {
          icon:['fa', 'car'],
          category:"Transport",
          value:"1000",
          total_value:"2000"
        },
        {
          icon:['fa','shopping-cart'],
          category:"Shopping",
          value:"2000",
          total_value:"3000"
        },
        {
          icon:['fa','shopping-cart'],
          category:"Shopping",
          value:"2000",
          total_value:"3000"
        },

              
    ]


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
