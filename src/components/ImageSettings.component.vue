<template>
  <main class="flex gap-5 justify-center">
    <div
      class="w-[47rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem] relative">
      <nav class="mt-[2.125rem] absolute pr-4">
        <c-Account />
      </nav>
      <header>
        <c-Title
          class="mt-[7rem] ml-[1.563rem] absolute"
          :text="$t('photo settings')" />
      </header>

      <section class="mt-[9.375rem] absolute">
        <div class="flex">
          <div class="ml-[1.563rem] w-[26.313rem]">
            <div />
            <c-image
              class="max-w-full"
              :my-params="myParams"
              :randomId="currentId" />
            <div class="w-56 h-[15.625rem] w-[9.125rem]" />
          </div>

          <div>
            <div>
              <c-action-button
                :text="$t('next photo')"
                type="no-style"
                class="flex justify-end h-[1.063rem]"
                @click="nextImg" />
            </div>

            <div>
              <c-action-button
                :text="$t('previous photo')"
                type="no-style"
                class="flex justify-end ml-2"
                @click="prevImg" />
            </div>
          </div>
        </div>
      </section>
      <section class="mt-[20rem]">
        <div
          class="grid grid-cols-3 gap-2 object-fit ml-[1.563rem] max-w-[26.313rem]">
          <div class="col-span-2">
            <c-input-range
              class="pt-8"
              :value="myParams.blur"
              @valueChanged="setNewBlurValue"
              minValue="0"
              maxValue="10"
              :text="$t('blur')" />
            <div class="relative mt-0">
              <span class="absolute left-0">0</span>
              <span class="absolute ml-[25.4rem]">10</span>
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
              <span class="absolute ml-[26rem]">1</span>
            </div>
          </div>
          <div class="grid gap-0 place-content-start pt-20 pl-5"></div>
        </div>
        <div
          class="border-b-2 border-gray-400 w-[43.375rem] ml-[1.563rem] mt-[4rem]"></div>
        <div class="flex gap-2 place-content-center my-20">
          <c-action-button
            @click="$router.push('/')"
            :text="$t('backwards')" />
          <c-action-button
            class="secondary"
            :text="$t('next')"
            @click="$router.push('shippingInformation')" />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import cTitle from '@/components/Title.component.vue';
import cImage from '@/components/Image.component.vue';
import cInputRange from '@/components/InputRange.component.vue';
import cActionButton from '@/components/ActionButton.component.vue';
import cAccount from '@/components/steps/Account.component.vue';

import { useStore } from 'vuex';
import { reactive } from 'vue';

export default {
  name: 'cImageSettings',
  components: {
    cImage,
    cTitle,
    cInputRange,
    cActionButton,
    cAccount,
  },

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
