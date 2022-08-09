<template>
  <main class="flex gap-5 justify-center relative mt-[2.75rem]">
    <div class="w-[47rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem]">
      <nav class="mt-[2.125rem] pr-4">
        <c-Account />
      </nav>

      <section class="mt-[2.5rem] relative ml-[2.125rem]">
        <div>
          <cTitle
            class="text-gray-600"
            :text="$t('place of printing')" />
        </div>

        <div>
          <cTitle
            class="mt-[3.063rem] absolute text-gray-600"
            :text="$t('additional settings')" />
        </div>

        <div class="ml-[6.188rem]">
          <div class="mt-[7rem] absolute">
            <cTitle
              :text="$t('basic information')"
              class="relative text-gray-600" />

            <div>
              <div class="absolute mt-[1.938rem] w-[40.125rem]">
                <cTitle
                  class="mt-[1.313rem] text-gray-600"
                  :text="$t('first and last name')" />
              </div>

              <div>
                <cTitle
                  class="mt-[2rem] text-gray-600"
                  :text="$t('town street building')" />
              </div>

              <div>
                <cTitle
                  class="mt-[4.313rem] text-gray-600"
                  :text="$t('email')" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <cTitle
            class="mt-[22.125rem] absolute text-gray-600"
            :text="$t('final price')" />

          <span class="mt-[22.300rem] absolute ml-[9rem]"
            ><span>{{ finalPrice }} </span>
            <span class="ml-2"><c-DisplayText :text="$t('euro')" /></span>
          </span>
        </div>
      </section>

      <section class="absolute mt-[33rem]">
        <div class="flex ml-[17.5rem]">
          <div>
            <cActionBtn
              class="mr-[1rem]"
              :text="$t('backwards')"
              @click="$router.push('shippingInformation')"
              :route-btn="true" />
          </div>

          <div>
            <cActionBtn
              :text="$t('order')"
              :color-primary="true" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import cAccount from '@/components/steps/Account.component.vue';
import cTitle from '@/components/Title.component.vue';
import cActionBtn from '@/components/ActionButton.component.vue';
import cDisplayText from '@/components/DisplayTextData.component.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, provide } from 'vue';

export default {
  name: 'vSummaryView',
  components: {
    cAccount,
    cTitle,
    cActionBtn,
    cDisplayText,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const currentPathObject = router.currentRoute.value;
    const finalPrice = computed(() => store.getters.getTshirtPrice);

    store.commit('ROUTER_NAMES', currentPathObject.name);

    const currentPage = computed(() => store.getters.getPathNumber);

    provide('number', currentPage.value[0]);

    return {
      router,
      currentPathObject,
      currentPage,
      finalPrice,
    };
  },
};
</script>
