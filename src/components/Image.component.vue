<template>
  <img
    alt="print image"
    :src="image" />
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'cImage',
  props: {
    randomId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const image = computed(() => store.state.image);

    onMounted(() => {
      store.dispatch('loadImage', {
        id: props.randomId,
        blur: 0,
        grayscale: 0,
      });
    });

    return {
      image,
    };
  },
});
</script>
