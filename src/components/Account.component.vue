<template>

    <div class='w-[44.375rem] h-[2.375rem] flex justify-center items-center'>

        <c-account-items text='Miejsce nadruku' />
        <c-account-Items text='Zmiana zdjecia' />
        <c-account-items text='Dane do wysyłki' />
        <c-account-items
          text='Podsumowanie'
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
