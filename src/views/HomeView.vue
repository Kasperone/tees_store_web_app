<template>
  <div>
    <c-nav-bar />
    <c-order-preview />
  </div>
</template>

<script>
import CNavBar from '@/components/NavBar.component.vue';
import COrderPreview from '@/components/OrderPreview.component.vue';

export default {
  components: {
    COrderPreview,
    CNavBar,
  },
};
</script>
