<template>
  <h2 :class="titleClass">{{ text }}</h2>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    titleClass() {
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
  /* use for: Podgląd zamówienia */
  .primary {
    @apply text-xl font-medium;
  }
  /* use for: Podgląd na koszulce, miejsce nadruku, Ustawienia zdjęcia, Informacje, Dodatkow informacj, Informacje podstawowe */
  .secondary {
    @apply text-xl font-medium  text-brand-gray-1;
  }
  /* use for: Kod Rabatowy */
  .third {
    @apply text-base font-medium text-brand-gray-1;
  }
}
</style>
