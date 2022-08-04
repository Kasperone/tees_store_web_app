<template>
  <label :for="label">
    <input
      :id="id"
      :value="value"
      :placeholder="placeholder"
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
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const handleInput = (event) => {
<<<<<<< HEAD
      emit('handleInput', event.target.value);
=======
      emit((value.value = event.target.value));
>>>>>>> develop
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
    @apply w-full h-14 bg-gray-300 rounded-xl;
  }
}
</style>
