<template>
  <c-Account />
</template>

<script>
import cAccount from '@/components/steps/Account.component.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vShippingInformation',
  components: {
    cAccount,
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