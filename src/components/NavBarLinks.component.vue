<template>
  <div class="flex space-x-16">
    <a
      href="#"
      class="text-brand-gray-light text-lg"
      v-for="(link, index) in allLinks"
      :key="index">
      {{ $t(`${link}`) }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'cNavBarLinks',
  props: {
    allLinks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
