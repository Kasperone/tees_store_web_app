<!-- eslint-disable -->
<template>
  <section
    class="container my-auto p-11 flex-row justify-between h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
    <div class="grid grid-cols-3 gap-2 object-fit">
      <div class="col-span-2">
        <c-title
          class="py-6"
          :text="$t('photo settings')" />
        <c-image
          class="max-w-full"
          :my-params="myParams"
          :randomId="currentId" />
        <c-input-range
          class="pt-8"
          :value="myParams.blur"
          @valueChanged="setNewBlurValue"
          minValue="0"
          maxValue="10"
          :text="$t('blur')" />
        <div class="relative mt-0">
          <span class="absolute left-0">0</span>
          <span class="absolute right-0">10</span>
        </div>
        <c-input-range
          class="pt-8"
          minValue="0"
          maxValue="1"
          :text="$t('grayscale')"
          @valueChanged="setNewGrayValue"
          :value="myParams.grayscale" />
        <div class="relative mt-0">
          <span class="absolute left-0">0</span>
          <span class="absolute right-0">1</span>
        </div>
      </div>
      <div class="grid gap-0 place-content-start pt-20 pl-5">
        <c-action-button
          :text="$t('next photo')"
          type="no-style"
          @click="nextImg" />
        <c-action-button
          :text="$t('previous photo')"
          type="no-style"
          @click="prevImg" />
      </div>
    </div>
    <div class="flex gap-2 place-content-center my-20">
      <c-action-button :text="$t('backwards')" />
      <c-action-button :text="$t('next')" />
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

    let currentId = randomId;

    const nextImg = () => {
      currentId += 1;
      store.dispatch('loadImage', {
        id: currentId,
        blur: myParams.blur,
        grayscale: myParams.grayscale,
      });
    };

    const prevImg = () => {
      currentId -= 1;
      store.dispatch('loadImage', {
        id: currentId,
        blur: myParams.blur,
        grayscale: myParams.grayscale,
      });
    };

    const setNewGrayValue = (value) => {
      myParams.grayscale = Number(value);

      store.dispatch('loadImage', {
        id: currentId,
        blur: myParams.blur,
        grayscale: myParams.grayscale,
      });
    };

    const setNewBlurValue = (value) => {
      myParams.blur = Number(value);

      store.dispatch('loadImage', {
        id: currentId,
        blur: myParams.blur,
        grayscale: myParams.grayscale,
      });
    };

    return {
      setNewBlurValue,
      setNewGrayValue,
      myParams,
      currentId,
      nextImg,
      prevImg,
    };
  },
};
</script>
