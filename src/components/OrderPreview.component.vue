<template>
  <section class='px-11 w-[32rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]'>
    <c-title class='pt-6 pb-5'
             text='Order preview' />

    <c-image class='mb-2.5' />

    <c-title type='secondary'
             text='Promo code:'
             v-if='!getIsPromoCodeActive' />

    <div class='flex w-full space-x-10'
         v-if='!getIsPromoCodeActive'>
   
      <c-input id='promo' 
               @handle-input='inputPromoPrice'
               class='relative'
      />
      <c-action-button text='Apply'
                       @click='applyPromoCode'
                       :disabled='promoPriceLength <= 3 || promoPriceLength >= 11'/>

    </div>

     <div v-if='promoPriceLength > 10' 
           class='text-red-500 absolute '>
          {{$t("write on more then 10 words")}} 

      </div>

    <div class='flex flex-row justify-between pt-[3.125rem]'>
      <span class='font-medium text-sm text-gray-700'>Print Placement</span>
      <div class='font-medium text-xl text-gray-800'><span>{{coverPrice}}</span> {{ currency }}</div>
    </div>

    <div class='flex flex-row justify-between mt-5'>
      <span class='text-xl'>Final price</span>
      <div class='font-medium text-xl text-gray-800'><span>{{priceValue}}</span> {{ currency }}</div>
    </div>
  </section>
</template>

<script>
import cActionButton from '@/components/ActionButton.component.vue';
import cTitle from '@/components/Title.component.vue';
import cInput from '@/components/Input.component.vue';
import cImage from '@/components/Image.component.vue';
import {useStore} from 'vuex'
import { computed } from 'vue'

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
      default: 0
    }
  },
  setup(){

    const store = useStore();
    const promoPriceLength = computed(() => store.getters.getInputPromoPrice);
    const getIsPromoCodeActive = computed(() => store.getters.getIsPromoCodeActive)
    const isRadioBtnEmpty = computed(() => store.state.radioBtn)
   
    function inputPromoPrice(payload){
      store.dispatch('handleInputPromoPrice', payload) 
    }

    function applyPromoCode(){
      store.dispatch('applyPromoCode', true) 
    }

    return{ 
      inputPromoPrice,
      applyPromoCode,
      promoPriceLength,
      getIsPromoCodeActive,
      isRadioBtnEmpty
    }
  }
};
</script>
