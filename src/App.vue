<template>
  <div>
    <c-nav-bar />
    <div class='container mx-auto py-8 flex items-center justify-between grid grid-cols-3 gap-4  '>
      <div class=' col-span-2 '>
        <c-image-settings/>
      </div>
      <c-order-preview/>
    </div>
    <router-view />
  </div>
</template>

<script>
import CNavBar from '@/components/NavBar.component.vue';
import COrderPreview from '@/components/OrderPreview.component.vue';
import cImageSettings from '@/components/ImageSettings.component.vue';


export default {
  components: {
    COrderPreview,
    CNavBar,
    cImageSettings,
  },
};
</script>
