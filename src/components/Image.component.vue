<template>
  <img alt="print image"
       :src="image"
  />
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'cImage',
  setup() {
    const store = useStore();
    const image = computed(() => store.state.image);

    onMounted(() => {
      store.dispatch('loadImage');
    });

    return {
      image,
    };
  },
});
</script>
