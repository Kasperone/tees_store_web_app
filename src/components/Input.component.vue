<template>
  <form>
    <label :for='label'>

    <input :id='id'
           class='input'
           v-model='promoCode'
           :placeholder='placeholder'
           @input='handleInput' />
    </label>
  </form>
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
  },
  emits: [ 'update:modelValue' ],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
  data() {
    return {
      promoCode: '',
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
