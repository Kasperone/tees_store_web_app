<template>
  <div class='w-5 h-5 border-2 rounded-full bg-black'>
    <span class='text-white flex justify-center mt-[-0.063rem] text-xs'>
      {{ number
      }}</span>
    <span v-if='!isChecked'>
      <img  class='ml-px w-[0.625rem] h-[0.625]' src="../assets/check-4785.png"  alt='icon-check'/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'cCircule',

  props: {
    number: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
