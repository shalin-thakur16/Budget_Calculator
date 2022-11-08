<template>
      <div class="flex justify-between  border-bottom w-full">
      <div>
        <div class="text-white text-base font-bold">{{title}}</div>
        <div class="text-base font-normal font-color-blue">{{place}}</div>
      </div>
      <div class="font-color text-sm font-semibold rounded-full border-col-sky  my-2 px-4 py-2 text-center">
        {{amount}}
      </div>
    </div>
</template>
<script>
export default{
    props:[
        'title','place','amount'
    ]

}
</script>
