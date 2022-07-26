<template>
  <section class="px-11 w-[513px] h-[772px] bg-brand-blue-1 rounded-[10px]">
    <h2 class="pt-6 pb-5 text-xl font-medium">Podgląd zamówienia</h2>
    <img class="" src="../assets/images/image1.png" />
    <p class="py-5 font-medium text-brand-gray-1">Kod Rabatowy:</p>
    <div>
      <input class="w-[270px] h-[59px] mr-[26px] bg-gray-300" type="text" />
      <action-button text="Apply" />
    </div>
    <div class="flex flex-row justify-between pt-[50px]">
      <span class="font-medium text-sm text-gray-700">miejsce nadruku</span>
      <div class="font-medium text-[20px] text-gray-800">0.00zł</div>
    </div>
    <div class="flex flex-row justify-between mt-5">
      <span class="text-[20px]">Cena końcowa</span>
      <div class="font-medium text-[20px] text-gray-800">0.00zł</div>
    </div>
  </section>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
  components: { ActionButton },
  name: "OrderPreview",
};
</script>
