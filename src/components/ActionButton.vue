<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
@tailwind components;

@layer components {
  button {
    @apply h-[60px] rounded-[10px];
  }

  .primary {
    @apply w-[125px]  bg-white text-blue-600  border border-solid border-blue-500;
  }

  .secondary {
    @apply w-[200px] bg-blue-600 text-white;
  }
}
</style>
