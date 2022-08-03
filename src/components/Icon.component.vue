<template>
  <img
    class="mr-6"
    :src="iconImage.arrow"
    alt="arrow icon" />
</template>

<script>
import { reactive, defineComponent } from 'vue';

export default defineComponent({
  name: 'cIcon',

  setup() {
    const iconImage = reactive({
      arrow: require('@/assets/images/arrow.svg'),
    });

    return {
      iconImage,
    };
  },
});
</script>
