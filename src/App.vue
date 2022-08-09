<template>
  <div>
    <div class="w-[90rem] m-auto">
      <cNavBar />
    </div>
    <router-view />
  </div>
</template>
<script>
import cNavBar from '@/components/NavBar.component.vue';

export default {
  name: 'vApp',
  components: {
    cNavBar,
  },
};
</script>
