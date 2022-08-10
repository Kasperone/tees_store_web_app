<template>
  <section class="px-11 w-full h-full bg-brand-blue-1 rounded-xl">
    <c-title
      class="pt-6 pb-5"
      text="Order preview" />

    <c-image
      class="w-[26.313rem]"
      :randomId="currentId" />

    <c-title
      text="Promo code:"
      type="secondary" />

    <div class="flex w-full space-x-10">
      <c-input />

      <c-action-button
        :text="$t('apply')"
        class="apply__btn" />
    </div>

    <div class="flex flex-row justify-between pt-12">
      <span class="font-medium text-sm text-gray-700">print placement</span>
      <div class="font-medium text-xl text-gray-800">0.00 {{ currency }}</div>
    </div>

    <div class="flex flex-row justify-between mt-5">
      <span class="text-xl">Final price</span>
      <div class="font-medium text-xl text-gray-800">0.00 {{ currency }}</div>
    </div>
  </section>
</template>

<script>
import cActionButton from '@/components/ActionButton.component.vue';
import cTitle from '@/components/Title.component.vue';
import cInput from '@/components/Input.component.vue';
import cImage from '@/components/Image.component.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'cOrderPreview',
  components: { cImage, cActionButton, cTitle, cInput },
  props: {
    currency: {
      type: String,
      default: 'euro',
    },
    priceValue: {
      type: Number,
      default: 0,
    },
    coverPrice: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const store = useStore();
    const promoPriceLength = computed(() => store.getters.getInputPromoPrice);
    const getIsPromoCodeActive = computed(
      () => store.getters.getIsPromoCodeActive,
    );
    const isRadioBtnEmpty = computed(() => store.state.radioBtn);

    function inputPromoPrice(payload) {
      store.commit('ADD_INPUT_PROMO_PRICE', payload);
    }

    function applyPromoCode() {
      store.commit('ADD_APPLY_PROMO_CODE', true);
    }

    function getRandomNumber(min, max) {
      return Math.floor(
        Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min),
      );
    }
    const randomId = getRandomNumber(1000, 1015);

    const currentId = randomId;

    return {
      inputPromoPrice,
      applyPromoCode,
      promoPriceLength,
      getIsPromoCodeActive,
      isRadioBtnEmpty,
      randomId,
      currentId,
    };
  },
};
</script>
