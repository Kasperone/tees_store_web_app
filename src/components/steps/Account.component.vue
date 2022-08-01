<template>
  <div class="w-[44.375rem] h-[2.375rem] flex justify-center items-center">
    <c-account-items :itemArray="getPageName" />
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
