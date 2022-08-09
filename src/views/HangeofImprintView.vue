<template>
  <div
    class="container flex gap-5 justify-center mt-[2.75rem] max-w-[81.813rem] m-auto">
    <div class="w-[48.625rem] h-[48.25rem]">
      <c-image-settings />
    </div>
    <div class="w-[32.063rem]">
      <c-order-preview />
    </div>
  </div>
</template>

<script>
import COrderPreview from '@/components/OrderPreview.component.vue';
import cImageSettings from '@/components/ImageSettings.component.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vHangeOfImprintView',
  components: {
    COrderPreview,
    cImageSettings,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const currentPathObject = router.currentRoute.value;
    const currentPage = computed(() => store.getters.getPathNumber);
    const bulletNum = computed(() => store.state.routerNames);
    store.commit('ROUTER_NAMES', currentPathObject.name);

    provide('number', currentPage.value[0]);
    provide('bulletNum', bulletNum);
  },
};
</script>
