<template>
  <img alt='print image'
       :src='printImage' />

</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'cImage',
  setup() {
    // eslint-disable-next-line global-require
    const printImage = ref(require('../assets/images/yellow-print.png'));

    return { printImage };
  },
});
</script>
