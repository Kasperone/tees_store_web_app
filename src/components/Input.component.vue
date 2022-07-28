<template>
  <div>
    <label :for='label'>

    <input id='text'
           name='text'
           type="text"
           :placeholder="placeholder"
           :value="modelValue"
           :class="inputStyle"
           @input="handleInput" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      default: 'promo',
      validator(value) {
        return [ 'promo' ].includes(value);
      },
    },
  },
  emits: [ 'update:modelValue' ],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
    },
  },
  computed: {
    inputStyle() {
      return {
        [ this.type ]: true,
      };
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  input {
    @apply w-full;
  }

  .promo {
    @apply h-14 mr-6 bg-gray-300 rounded-[10px];
  }
}
</style>
