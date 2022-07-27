<template>
  <div>
    <ul class="flex">
      <li class="mr-5 ml-5">{{ text }}</li>
      <li v-if="!isLineActive" class="flex w-24">
        <span class="mr-1 m-auto min-w-4"><img w-6 src="../assets/Line.png" /></span>
        <span class="w-5 h-5 m-auto ">
          <c-Circule-component />
        </span>
        <span class="m-auto max-w-4"><img class="ml-1" src="../assets/Line.png" /></span>
      </li>
    </ul>
  </div>
</template>

<script>
import cCirculeComponent from "@/components/cCirculeComponent.vue";

export default {
  name: 'cAccountItems',
  components: {
    cCirculeComponent,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    isLineActive: {
      type: Boolean,
      default: false,

    }
  },
};
</script>
