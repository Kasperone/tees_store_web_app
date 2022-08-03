<!-- eslint-disable -->
<template>
  <div>
    <label for="range"
           class="font-bold text-gray-600">
      {{ text }}
    </label>
    <div>
      <input @change="$emit('valueChanged', inputValue);"
             v-model="inputValue"
             type="range"
             :min="minValue"
             :max="maxValue"
             name="range"
             class="w-[26.5rem] h-px bg-black cursor-pointer appearance-none slider-thumb" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'cInputRange',
  props: {
    text: {
      type: String,
      default: 'Blur',
    },
    minValue: {
      type: String,
      default: '1',
    },
    maxValue: {
      type: String,
      default: '10',
    },
    stepValue: {
      type: String,
      default: '1',
    },
  },
  setup() {
    const inputValue = ref(0);

    return {
      inputValue,
    };
  },
};
</script>
