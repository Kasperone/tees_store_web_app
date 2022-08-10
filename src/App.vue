<template>
  <div>
    <c-nav-bar />
    <router-view />
  </div>
</template>

<script>
import CNavBar from '@/components/NavBar.component.vue';
export default {
  components: {
    CNavBar,
  },
};
</script>
