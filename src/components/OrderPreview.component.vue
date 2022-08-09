<template>
  <section
    class="px-11 w-[32rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
    <c-title
      class="pt-6 pb-5"
      :text="$t('order preview')" />

    <c-image
      class="mb-2.5"
      :randomId="currentId" />

    <c-title
      class="secondary"
      :text="$t('promo code')"
      v-if="!getIsPromoCodeActive" />

    <div
      class="flex gap-8"
      v-if="!getIsPromoCodeActive">
      <c-input
        @handle-input="inputPromoPrice"
        class="relative"
        :secandaryStyle="true" />

      <c-action-button
        :text="$t('apply')"
        @click="applyPromoCode"
        :disabled="promoPriceLength <= 3 || promoPriceLength >= 11"
        :appl-btn="true" />
    </div>

    <div
      v-if="promoPriceLength > 10"
      class="text-red-500 absolute">
      {{ $t('write words') }}
    </div>

    <div class="flex flex-row justify-between pt-[3.125rem]">
      <span class="font-medium text-sm text-gray-700">{{
        $t('place of printing')
      }}</span>
      <div class="font-medium text-xl text-gray-800">
        <span>{{ coverPrice }}</span> {{ currency }}
      </div>
    </div>

    <div class="flex flex-row justify-between mt-5">
      <span class="text-xl">{{ $t('final price') }}</span>
      <div class="font-medium text-xl text-gray-800">
        <span>{{ priceValue }}</span> {{ currency }}
      </div>
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
