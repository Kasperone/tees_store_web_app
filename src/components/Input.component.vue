<template>
  <label :for="label">
    <input
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput" />
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cInput',
  props: {
    label: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    value: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const handleInput = (event) => {
      emit(('inputValue', event.target.value));
    };

    return {
      handleInput,
    };
  },
});
</script>

<style scoped>
@tailwind components;

@layer components {
  input {
    @apply w-full h-14 p-3.5 bg-gray-300 rounded-xl;
  }
}
</style>
