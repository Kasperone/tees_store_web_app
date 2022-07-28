<template>
    <div class='w-[44.375rem] h-[2.375rem] flex justify-center items-center'>

        <c-account-items text='empty string' />
        <c-account-Items text='empty string' />
        <c-account-items text='empty string' />
        <c-account-items
          text='empty string'
          is-line-active='false' />

    </div>

</template>

<script>

import cAccountItems from '@/components/AccountItems.component.vue';

export default {
  name: 'cAccount',
  components: {
    cAccountItems,
  },

};
</script>
