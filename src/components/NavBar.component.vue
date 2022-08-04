<template>
  <section>
    <nav>
      <c-nav-bar-items
        :is-active="true"
        img-file-name="tees-logo.png"
        img-alt="tees logo" />
    </nav>

    <img
      src="@/assets/images/line.svg"
<<<<<<< HEAD
      alt="horisontal line" />
=======
      alt="horizontal line" />
>>>>>>> develop
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
