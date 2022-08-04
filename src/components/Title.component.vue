<template>
  <h2 :class="titleClass">{{ text }}</h2>
</template>

<script>
import { computed, toRefs, defineComponent } from 'vue';

export default defineComponent({
  name: 'cTitle',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'third'].includes(value),
    },
  },
  setup(props) {
    const { type } = toRefs(props);

    const titleClass = computed(() => ({
      [type.value]: true,
    }));

    return {
      titleClass,
    };
  },
});
</script>

<style scoped>
@tailwind components;

@layer components {
  .primary {
    @apply text-xl font-medium;
  }

  .secondary {
    @apply text-base font-medium  text-brand-gray-1;
  }

  .third {
    @apply text-base font-medium text-brand-gray-1;
  }
}
</style>
