<template>
    <div class="flex justify-between">
        <div v-if="isActive"
            class="flex items-center justify-between space-x-2 px-6 text-brand-gray-light">

          <h2 class="text-lg">{{ $t("account") }}</h2>
            <img :src="require(`@/assets/images/${imgFileName}`)"
                 :alt="imgAlt" />
        </div>

        <div class="flex flex-row space-x-2">

            <img  class="h-6"
                  src="@/assets/images/bag.png"
                  alt="bag" />

            <div class="text-lg">3</div>

            <h3 class="text-lg">{{ $t("items") }}</h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cNavBarAccountDropDown',
  props: {
    imgFileName: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      dafeault: false,
    },
  },
};
</script>
