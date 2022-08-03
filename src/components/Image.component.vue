<template>
  <img :alt='altName'
       :src='imgSrc' />

</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'cImage',
   props: {
    altName:{
      type:String,
      default: 'image'
    },
    imgSrc: {
      Type: String,   
    }
  },
  setup() {
   const printImage = ref(require('../assets/images/yellow-print.png'));

    return {
      printImage,
    };
  }, 
});
</script>
