<template>
  <h1>HomeView</h1>
  <order-preview />
</template>

<script>
import OrderPreview from "@/components/OrderPreview.vue";

export default {
  name: "HomeView",
  components: {
    OrderPreview,
  },
};
</script>
