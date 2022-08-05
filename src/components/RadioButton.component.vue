<template>
  <div>
    <input
      type="radio"
      :id="radioBtnValue"
      name="buttonRadio"
      :value="radioBtnValue"
      @change="getValueBtn" />

    <label
      :for="radioBtnValue"
      class="inline-block ml-3">
      {{ labelName }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'cRadioBtn',
  props: {
    radioBtnValue: {
      type: Number,
      default: null,
    },
    labelName: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    function getValueBtn(event) {
      emit('get-btn-value', event.target.value);
    }

    return {
      getValueBtn,
    };
  },
};
</script>
