<template>

    <div class="w-[44.375rem] h-[2.375rem] absolute  flex justify-center items-center">
        <cAccountItems text="Miejsce nadruku" />
        <cAccountItems text="Zmiana zdjecia" />
        <cAccountItems text="Dane do wysyłki" />
        <cAccountItems text="Podsumowanie" is-line-active='false' />
    </div>
</template>

<script>

import cAccountItems from "@/components/cAccountItems.vue";

export default {
    name: "AccountComponent",
    components: {
        cAccountItems,
    },

};
</script>