<template>
  <section
    class="container my-auto p-11 flex-row justify-between h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
    <c-title
      class="pt-6 pb-5"
      text="Ustawienia zdjęcia" />
    <c-image class="mb-2.5" />
    <c-input-range @valueChanged="setNewBlurValue" />
    <c-input-range text="Grayscale"
                   @valueChanged="setNewGrayValue" />
  </section>
</template>

<script>

import cTitle from '@/components/Title.component.vue';
import cImage from '@/components/Image.component.vue';
import cInputRange from '@/components/InputRange.component.vue';
import { useStore } from 'vuex';

export default {
  name: 'cImageSettings',
  components: { cImage, cTitle, cInputRange },

  setup() {
    const store = useStore();

    const setNewBlurValue = (value) => {
      store.dispatch('loadImage', value);
    };

    const setNewGrayValue = (value) => {
      console.log('value: ', value);
    };

    return {
      setNewBlurValue,
      setNewGrayValue,
    };
  },
};

</script>
