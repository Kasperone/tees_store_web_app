<template>
  <button
    :class="{
      secondary: colorPrimary,
      primary: routeBtn,
      apply__btn: applBtn,
    }">
    {{ text }}
  </button>
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
    },
    colorPrimary: {
      type: Boolean,
      default: false,
    },
    routeBtn: {
      type: Boolean,
      default: false,
    },
    applBtn: {
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
    @apply h-14 w-[12.5rem] rounded-lg text-black;
  }

  .primary {
    @apply text-black bg-brand-blue-1;
  }

  .secondary {
    @apply bg-blue-600 text-white;
  }
  .apply__btn {
    @apply text-blue-600 border-2 border-blue-600 h-[3.60rem];
  }
}
</style>
