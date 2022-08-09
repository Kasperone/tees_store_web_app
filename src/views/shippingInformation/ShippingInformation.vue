<template>
  <div class="flex w-full justify-center flex-row my-0 mx-auto">
    <div class="flex flex-col w-[48.625rem] mr-8 bg-brand-blue-1 rounded-xl">
      <c-Account class="px-9 mt-8" />
      <c-title
        class="ml-11 my-11"
        type="secondary"
        text="Information" />
      <c-form class="my-0 mx-auto" />
    </div>
    <c-order-preview />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';
import cAccount from '@/components/steps/Account.component.vue';
import cForm from '@/views/shippingInformation/components/ShippingForm.component.vue';
import cOrderPreview from '@/components/OrderPreview.component.vue';
import cTitle from '@/components/Title.component.vue';

export default {
  name: 'vShippingInformation',
  components: {
    cTitle,
    cAccount,
    cForm,
    cOrderPreview,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const currentPathObject = router.currentRoute.value;

    store.commit('ROUTER_NAMES', currentPathObject.name);
    const currentPage = computed(() => store.getters.getPathNumber);
    provide('number', currentPage.value[0]);

    return {
      router,
      currentPathObject,
      currentPage,
    };
  },
};
</script>
