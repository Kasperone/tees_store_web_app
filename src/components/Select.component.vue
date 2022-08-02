<template>
  <div class="w-72">
    <button
      class="select-btn"
      @click="open">
      <span class="select-label">{{ text }}</span>

      <img
        src="../assets/images/arrow-drop-down.png"
        alt="arrow" />
    </button>

    <div v-if="isOpen">
      <ul class="select-list">
        <li
          class="select-list_element"
          v-for="item in items"
          :key="item.id">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'cSelect',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Shipping',
    },
  },
  setup() {
    const items = ref([
      { id: 1, label: 'DPD Courier' },
      { id: 2, label: 'UPS Courier' },
      { id: 3, label: 'DHL Courier' },
    ]);

    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    return { items, isOpen, open };
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
    @apply text-gray-800 mt-1 bg-gray-300 rounded-xl;
  }

  .select-list_element {
    @apply flex h-14 pl-4 items-center rounded-xl cursor-pointer hover:bg-gray-200;
  }
}
</style>
