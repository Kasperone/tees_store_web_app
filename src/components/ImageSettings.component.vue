<template>
  <section
    class="container my-auto p-11 flex-row justify-between h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
    <div class="grid grid-cols-3 gap-2 object-fit">
      <div class="col-span-2">
        <c-title
          class="py-6"
          :text="$t('photo settings')" />

        <div class="flex">
          <c-image
            class="max-w-full"
            :my-params="myParams"
            :randomId="randomId" />

          <div>
            <div>
              <c-action-button
                class="text-start ml-9 mb-3"
                :text="$t('next photo')"
                @click="nextImg" />
            </div>

            <div>
              <c-action-button
                class="text-start ml-9"
                :text="$t('previous photo')"
                @click="prevImg" />
            </div>
          </div>
        </div>

        <c-input-range
          class="py-6"
          :value="myParams.blur"
          @valueChanged="setNewBlurValue"
          minValue="0"
          maxValue="10"
          :text="$t('blur')" />

        <div class="relative mt-0">
          <span class="absolute left-0">{{ myParams.blur }}</span>
          <span class="absolute ml-[25.4rem]">10</span>
        </div>

        <c-input-range
          class="py-6"
          minValue="0"
          maxValue="1"
          @valueChanged="setNewGrayValue"
          :value="myParams.grayscale"
          :text="$t('grayscale')" />

        <div class="relative mt-0">
          <span class="absolute left-0">{{ myParams.grayscale }}</span>
          <span class="absolute ml-[26rem]">1</span>
        </div>
      </div>
    </div>
    <div class="flex gap-2 place-content-center my-20">
      <c-action-button
        class="hover:bg-gray-500 hover:text-white"
        @click="$router.push('/')"
        :text="$t('backwards')" />

      <c-action-button
        class="secondary hover:bg-blue-500"
        :text="$t('next')"
        @click="$router.push('shippingInformation')" />
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

    const setNewGrayValue = (value) => {
      myParams.grayscale = value;
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

    return {
      setNewBlurValue,
      setNewGrayValue,
      myParams,
      randomId,
      currentId,
      nextImg,
      prevImg,
    };
  },
};
</script>
