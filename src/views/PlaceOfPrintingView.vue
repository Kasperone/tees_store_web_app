<template>
  <div>
  <c-Account />
  <c-select />
  </div>
</template>

<script>
import cAccount from '@/components/steps/Account.component.vue';
import cSelect from '@/components/Select.component.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vPlaceOfPrintingView',
  components: {
    cSelect,
    cAccount,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const currentPathObject = router.currentRoute.value;

    store.dispatch('routerName', currentPathObject.name);

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
