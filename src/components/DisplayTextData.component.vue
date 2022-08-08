<template>
  <span>
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'cDisplayTextData',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
