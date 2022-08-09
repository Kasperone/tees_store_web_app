<template>
  <div class="w-52">
    <button
      class="select-btn"
      @click.prevent="open"
      @keypress.enter="isOpen">
      <span class="select-label">{{ $t(text) }}</span>

      <c-icon
        :class="[
          isOpen
            ? 'rotate-180 transition-transform duration-500'
            : 'rotate-0 transition-transform duration-500',
        ]" />
    </button>

    <ul
      v-if="isOpen"
      class="select-list">
      <li
        v-for="item in selectItems"
        :key="item.value"
        class="select-list_element"
        @change="sendItemChange">
        {{ $t(item.label) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import cIcon from '@/components/Icon.component.vue';

export default defineComponent({
  name: 'cSelect',
  components: { cIcon },
  props: {
    text: {
      type: String,
      default: 'Shipping',
    },
    selectItems: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const sendItemChange = (event) => {
      emit('selectItemChange', event.target.value);
    };
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      sendItemChange,
      isOpen,
      open,
    };
  },
});
</script>

<style scoped>
@tailwind components;

@layer components {
  .select-btn {
    @apply w-full flex justify-between content-center items-center h-14 bg-gray-300 rounded-xl hover:bg-gray-200;
  }

  .select-label {
    @apply text-base text-gray-800 pl-4;
  }

  .select-list {
    @apply absolute w-52 text-gray-800 mt-1 bg-gray-100 rounded-xl;
  }

  .select-list_element {
    @apply flex w-full h-14 pl-4 items-center rounded-xl cursor-pointer hover:bg-gray-200;
  }
}
</style>
