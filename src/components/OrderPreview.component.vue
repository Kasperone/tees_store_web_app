<template>
  <section
    class='px-11 w-[32rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]'>
    <c-title class='pt-6 pb-5'
             text='Order preview' />

    <img class=''
         alt='image'
         src='../assets/images/image1.png' />

    <c-title class='py-5'
             type='third'
             text='Discount code:' />

    <div>
      <label for='codeInput'>
      <input
        id='codeInput'
        class='w-[16.875rem] h-[3.688rem] mr-[1.625rem] bg-gray-300'
        type='text' />
      </label>
      <c-action-button text='Apply' />
    </div>

    <div class='flex flex-row justify-between pt-[3.125rem]'>
      <span class='font-medium text-sm text-gray-700'>print placement</span>
      <div class='font-medium text-xl text-gray-800'>0.00 &#x20AC;</div>
    </div>

    <div class='flex flex-row justify-between mt-5'>
      <span class='text-xl'>Finial price</span>
      <div class='font-medium text-xl text-gray-800'>0.00 &#x20AC;</div>
    </div>
  </section>
</template>

<script>
import cActionButton from '@/components/ActionButton.component.vue';
import cTitle from '@/components/Title.component.vue';

export default {
  components: { cActionButton, cTitle },
  name: 'cOrderPreview',
};
</script>
