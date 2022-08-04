<template>
  <main class="flex gap-5 justify-center">
    <div
      class="w-[47rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem] relative">
      <nav class="mt-[2.125rem] absolute">
        <c-Account />
      </nav>
      <section>
        <div>
          <cTitle
            :text="$t('place of printing')"
            class="" />
        </div>
        <div><cTitle :text="$t('additional settings')" /></div>
        <div>
          <cTitletext :text="$t('basic information')" />
          <div><cTitle :text="$t('first and last name')" /></div>
          <div><cTitletext :text="$t('town street building')" /></div>
          <div><cTitle :text="$t('email')" /></div>
        </div>

        <div><cTitletext :text="$t('final price')" /></div>
      </section>
    </div>
  </main>
</template>
<script>
import cAccount from '@/components/steps/Account.component.vue';
import cTitle from '@/components/Title.component';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vSummaryView',
  components: {
    cAccount,
    cTitle,
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
