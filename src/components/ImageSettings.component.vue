<template>
  <section
    class="container my-auto p-11 flex-row justify-between h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
    <div class="grid grid-cols-3 gap-2 object-fit">
      <div class="col-span-2">
        <c-title
          class="py-6"
          text="Ustawienia zdjęcia" />
        <c-image
          class="max-w-full"
          :my-params="myParams"
          :randomId="randomId" />
        <c-input-range
          class="py-6"
          :value="myParams.blur"
          @valueChanged="setNewBlurValue"
          minValue="0"
          maxValue="10" />
        <c-input-range
          class="py-6"
          minValue="0"
          maxValue="1"
          text="Grayscale"
          @valueChanged="setNewGrayValue"
          :value="myParams.grayscale" />
      </div>
    </div>
    <div class="flex gap-2 place-content-center my-20">
      <c-action-button text="Wstecz" />
      <c-action-button text="Dalej" />
    </div>
  </section>
</template>

<script>
import cTitle from '@/components/Title.component.vue';
import cImage from '@/components/Image.component.vue';
import cInputRange from '@/components/InputRange.component.vue';
import cActionButton from '@/components/ActionButton.component.vue';
import { useStore } from 'vuex';
import { reactive } from 'vue';

export default {
  name: 'cImageSettings',
  components: { cImage, cTitle, cInputRange, cActionButton },

  setup() {
    const store = useStore();
    const myParams = reactive({
      blur: 0,
      grayscale: 0,
    });

    function getRandomNumber(min, max) {
      return Math.floor(
        Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min),
      );
    }
    const randomId = getRandomNumber(1000, 1015);

    const setNewGrayValue = (value) => {
      myParams.grayscale = value;
      console.log('myParams:', myParams);
      if (value > 0) {
        store.dispatch('loadImage', {
          id: randomId,
          blur: myParams.blur,
          grayscale: myParams.grayscale,
        });
      } else {
        store.dispatch('loadImage', {
          id: randomId,
          blur: myParams.blur,
          grayscale: 0,
        });
      }
    };

    const setNewBlurValue = (value) => {
      myParams.blur = value;
      if (value > 0) {
        store.dispatch('loadImage', {
          id: randomId,
          blur: myParams.blur,
          grayscale: myParams.grayscale,
        });
      }
      if (myParams.blur === '0') {
        store.dispatch('loadImage', {
          id: randomId,
          grayscale: myParams.grayscale,
          blur: (myParams.blur = 0),
        });
      }
      if (myParams.grayscale === '0') {
        store.dispatch('loadImage', {
          id: randomId,
          blur: myParams.blur,
          grayscale: (myParams.grayscale = 0),
        });
      }
    };

    return {
      setNewBlurValue,
      setNewGrayValue,
      myParams,
      randomId,
    };
  },
};
</script>
