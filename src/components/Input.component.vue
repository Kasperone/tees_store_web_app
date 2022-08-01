<template>
  <label :for='label'>

    <input :id='id'
           :value='value'
           :placeholder='placeholder'
           @input='handleInput' />
  </label>

</template>

<script>
import { ref, defineComponent } from 'vue';

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
  },
  setup(_, { emit }) {
    const value = ref('');
    const handleInput = (event) => {
      emit(value.value = event.target.value);
    };

    return {
      handleInput,
      value,
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
