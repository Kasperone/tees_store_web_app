<template>
<div class=" container mx-auto py-8 flex items-center justify-between">

    <div v-if="isActive"
         class="flex items-center justify-between">

          <img :src="require(`@/assets/images/${imgFileName}`)"
               :alt="imgAlt" />

    </div>

    <c-nav-bar-links :all-links="allLinks"/>
    <c-nav-bar-item-drop  :is-active='true'
                          img-file-name='arrow.svg'
                          img-alt="arrow" />

</div>

</template>

<script>
import { ref } from 'vue';
import cNavBarLinks from '@/components/NavBarLinks.component.vue';
import cNavBarItemDrop from '@/components/NavBarItemDrop.component.vue';

export default {
  name: 'cNavBarItems',
  components: {
    cNavBarLinks,
    cNavBarItemDrop,
  },
  props: {
    Text: {
      type: String,
      default: '',
    },
    imgFileName: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      dafeault: false,
    },
  },
  setup() {
    const allLinks = ref([ 'home', 'shop', 'contact', 'help' ]);

    return {
      allLinks,
    };
  },
};
</script>
