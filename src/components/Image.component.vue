<template>
  <img
    alt="print image"
    :src="image" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cImage',
  /* setup() {
    // eslint-disable-next-line global-require
    const store = useStore();
    console.log(store.state.image);
    const image = ref(store.state.image);

    return {
      image: image
    };
  }, */
  mounted() {
    this.$store.dispatch('loadImage');
  },
  computed: {
    image() {
      return this.$store.state.image;
    },
  },
});
</script>
