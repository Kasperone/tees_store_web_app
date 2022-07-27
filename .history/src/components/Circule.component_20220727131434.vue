<template>
  <div class="w-5 h-5 border-2 rounded-full bg-black">
    <span class="text-white flex justify-center mt-[-0.063rem] text-xs">
      {{        number
  }}</span>
    <span v-if="isChecked">
      <img class='ml-px' 
      src='@/assets/check-icon.svg'
      alt='icon-check' />
     </span>
  </div>
</template>

<script>
export default {
  name: "cCircule",

  props: {
    number: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
