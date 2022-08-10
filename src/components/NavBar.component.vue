<template>
  <section>
    <nav>
      <c-nav-bar-items
        :is-active="true"
        img-file-name="tees-logo.png"
        img-alt="tees logo" />
    </nav>

    <div class="border-b-2 border-gray-500 max-w-auto"></div>
  </section>
</template>

<script>
import cNavBarItems from '@/components/NavBarItems.component.vue';

export default {
  name: 'CNavBar',
  components: {
    cNavBarItems,
  },
};
</script>
