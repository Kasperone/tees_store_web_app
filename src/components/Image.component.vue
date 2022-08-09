<template>
  <img
    :alt='altName'
    :src='imgSrc'
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cImage',
  props: {
    altName: {
      type: String,
      default: 'image',
    },
    imgSrc: {
      Type: String,
    },
  },
});
</script>
