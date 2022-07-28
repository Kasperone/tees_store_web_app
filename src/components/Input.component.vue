<template>
  <div>
    <label :for='label'>

    <input :id='id'
           :placeholder='placeholder'
           :value='modelValue'
           :class='inputStyle'
           @input='handleInput' />
    </label>
  </div>
</template>

<script>
export default {
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
    modelValue: {
      type: String,
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
