<template>
  <img class='mb-2.5'
       alt='print image'
       :src='printImage' />
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'cImage',
  setup() {
    // eslint-disable-next-line global-require
    const printImage = ref(require('../assets/images/image1.png'));
    return { printImage };
  },
});
</script>
