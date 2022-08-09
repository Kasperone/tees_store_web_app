<template>
  <section>
    <nav>
      <c-nav-bar-items
        :is-active='true'
        img-file-name='tees-logo.png'
        img-alt='tees logo'
      />
    </nav>

    <img
      class="max-w-fit"
      src="@/assets/images/line.svg"
      alt="horizontal line" />
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
