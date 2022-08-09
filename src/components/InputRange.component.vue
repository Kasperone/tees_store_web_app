<template>
  <div>
    <label
      for='range'
      class='font-bold text-gray-600'
    >
      {{ text }}
    </label>
    <div>
      <input
        type='range'
        :min='minValue'
        :max='maxValue'
        :value='stepValue'
        :name='range'
        class='w-[26.5rem] h-px bg-black cursor-pointer appearance-none slider-thumb'
      />
    </div>
  </div>
</template>

<script>
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
};
</script>
