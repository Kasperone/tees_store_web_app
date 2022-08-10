<template>
  <main class="flex gap-5 justify-center mt-[2.75rem]">
    <div
      class="w-[47rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem] relative">
      <nav class="mt-[2.125rem] absolute pr-4">
        <c-Account />
      </nav>

      <header>
        <c-Title
          class="mt-[7rem] ml-[1.563rem] absolute"
          :text="$t('t-shirt preview')" />
      </header>

      <section class="mt-[9.375rem] ml-[6.25rem] absolute">
        <div class="flex">
          <div
            class="bg-[url('@/assets/images/tshirt-front.png')] w-56 h-[15.625rem]">
            <img
              alt="print image"
              :src="image"
              class="mt-16 ml-16 w-[5.625rem] h-[4.375rem] object-cover" />
          </div>
          <div
            class="bg-[url('@/assets/images/tshirt-back.png')] w-56 h-[15.625rem] ml-[6.25rem]">
            <img
              alt="print image"
              :src="image"
              class="mt-16 ml-16 w-[5.625rem] h-[4.375rem] object-cover" />
          </div>
        </div>
      </section>
      <header>
        <c-Title
          class="mt-[27.5rem] ml-[1.563rem] absolute"
          :text="$t('place of printing')" />
      </header>

      <section class="mt-[30rem] ml-[5.30rem] absolute">
        <ul
          v-for="(item, index) in tshirtPriceCover"
          :key="index">
          <li>
            <c-RadioBtn
              :label-name="$t(item.name)"
              :radioBtnValue="index + 1"
              @get-btn-value="getValueBtnFront" />
          </li>
        </ul>
      </section>

      <div
        class="w-[43.375rem] border-t-4 absolute mt-[36.875rem] ml-[2.125rem] border-indigo-500" />

      <section class="mt-[40.625rem] ml-[28.063rem] absolute">
        <cActionBtn
          @click="$router.push('hangeofImprintView')"
          :text="$t('next')"
          :disabled="tshirtCoverPrice === undefined"
          :color-primary="true"
          class="disabled:bg-red-600" />
      </section>
    </div>

    <div>
      <cOrderPrv
        :price-value="tshirtPrice"
        :cover-price="tshirtCoverPrice" />
    </div>
  </main>
</template>
<script>
import cAccount from '@/components/steps/Account.component.vue';
import cTitle from '@/components/Title.component.vue';
import cRadioBtn from '@/components/RadioButton.component.vue';
import cActionBtn from '@/components/ActionButton.component.vue';
import cOrderPrv from '@/components/OrderPreview.component.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vPlaceOfPrintingView',
  components: {
    cAccount,
    cTitle,
    cRadioBtn,
    cActionBtn,
    cOrderPrv,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const currentPathObject = router.currentRoute.value;
    const tshirtPriceCover = computed(() => store.state.tshirtPriceCover);
    const tshirtPrice = computed(() => store.getters.getTshirtPrice);
    const tshirtCoverPrice = computed(
      () => store.getters.getTshirtCoverPrice[0],
    );
    const getIsPromoCodeActive = computed(
      () => store.getters.getIsPromoCodeActive,
    );
    const currentPage = computed(() => store.getters.getPathNumber);
    const image = computed(() => store.state.image);

    store.commit('ROUTER_NAMES', currentPathObject.name);
    provide('number', currentPage.value[0]);

    function getValueBtnFront(payload) {
      store.commit('ADD_RADIO_BTN', Number(payload));
    }

    function getValueBtnBack(payload) {
      store.commit('ADD_RADIO_BTN', Number(payload));
    }

    function getValueBtnBoth(payload) {
      store.commit('ADD_RADIO_BTN', Number(payload));
    }

    return {
      router,
      currentPathObject,
      currentPage,
      tshirtPrice,
      tshirtCoverPrice,
      getIsPromoCodeActive,
      tshirtPriceCover,
      image,
      getValueBtnFront,
      getValueBtnBack,
      getValueBtnBoth,
    };
  },
};
</script>
