<template>
  <div class="w-5 h-5 border-2 rounded-full bg-black">
    <span class="text-white flex justify-center mt-[-0.063rem] text-xs">
      <p :class="[taskChecked ? 'hidden' : '']">
        {{ itemNumber }}
      </p>
    </span>

    <span>
      <img
        class="ml-px w-[0.725rem] h-[0.725] mt-[0.188rem]"
        src="@/assets/images/check-icon.png"
        alt="icon-check" />
    </span>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'cCircule',
  props: {
    itemNumber: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const number = inject('number');
    const bulletNum = inject < number > 'bulletNum';
    const taskChecked = computed(() => number > props.itemNumber);

    return {
      number,
      bulletNum,
      taskChecked,
    };
  },
};
</script>
