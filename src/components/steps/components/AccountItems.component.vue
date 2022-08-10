<!-- eslint-disable -->
<template>
  <div
    v-for="(item, index) in itemArray"
    :key="index">
    <ul class="flex">
      <li
        :class="[currentPage === item.PageName ? 'text-color' : '']"
        class="text-center">
        <span> {{ $t(item.name) }} </span>
      </li>

      <li
        :class="[index === itemArray.length - 1 ? 'hidden' : '']"
        class="flex w-24">
        <span class="mr-1 m-auto min-w-4">
          <img
            class="w-6"
            src="@/assets/images/Line.png"
            alt="line-photo" />
        </span>

        <span class="w-5 h-5 m-auto">
          <c-Circule :item-number="item.id" />
        </span>

        <span class="m-auto max-w-4">
          <img
            class="ml-1"
            src="@/assets/images/Line.png"
            alt="line-photo" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import cCircule from '@/components/steps/components/Circule.component.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'cAccountItems',
  components: {
    cCircule,
  },
  props: {
    itemArray: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const currentPage = computed(() => store.state.currentPageName);
    const itemLength = computed(() => props.itemArray.length);

    return {
      currentPage,
      itemLength,
    };
  },
};
</script>
