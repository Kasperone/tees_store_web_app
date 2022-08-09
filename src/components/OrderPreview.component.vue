<template>
  <section class="px-11 w-full h-full bg-brand-blue-1 rounded-xl">
    <c-title
      class="pt-6 pb-5"
      text="Order preview" />

    <c-image class="mb-2.5" />

    <c-title
      text="Promo code:"
      type="secondary" />

    <div class="flex w-full space-x-10">
      <c-input />

      <c-action-button text="Apply" />
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

export default {
  name: 'cOrderPreview',
  components: { cImage, cActionButton, cTitle, cInput },
  props: {
    currency: {
      type: String,
      default: 'euro',
    },
  },
};
</script>
