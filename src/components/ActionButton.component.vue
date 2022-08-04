<template>
<<<<<<< HEAD
  <button :class="[colorPrimary ? 'secondary' : '', 'primary']">
    {{ text }}
  </button>
=======
  <button :class="buttonClass">{{ text }}</button>
>>>>>>> develop
</template>

<script>
import { computed, toRefs, defineComponent } from 'vue';

export default defineComponent({
  name: 'cActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value);
      },
    },
    colorPrimary: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type } = toRefs(props);

    const buttonClass = computed(() => ({
      [type.value]: true,
    }));

    return {
      buttonClass,
    };
  },
});
</script>

<style scoped>
@tailwind components;

@layer components {
  button {
    @apply h-14 rounded-lg;
  }

  .primary {
    @apply w-32  bg-white text-blue-600  border border-solid border-blue-500;
  }

  .secondary {
    @apply w-52 bg-blue-600 text-white;
  }
}
</style>
