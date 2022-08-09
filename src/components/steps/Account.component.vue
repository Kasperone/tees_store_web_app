<template>
  <div class='container md h-[2.375rem] flex justify-center items-center p-2'>
    <c-account-items :itemArray='getPageName' />
  </div>
</template>

<script>
import cAccountItems from '@/components/steps/components/AccountItems.component.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'cAccount',
  components: {
    cAccountItems,
  },

  setup() {
    const store = useStore();
    const getPageName = computed(() => store.state.routerNames);

    return {
      getPageName,
    };
  },
};
</script>
