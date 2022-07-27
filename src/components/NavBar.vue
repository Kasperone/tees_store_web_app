<template>
  <section>
    <nav class="relative container mx-auto py-8">
      <div class="flex items-center justify-between">
        <h1>
          <img src="@/assets/images/tees-logo.png"
               alt="shop logo tees"/>
        </h1>

        <div class="flex space-x-16 text-lg">
          <a href="#"
             class="text-brand-gray-light">{{ $t("home") }}</a>
          <a href="#"
             class="text-brand-gray-light">{{ $t("shop") }}</a>
          <a href="#"
            class="text-brand-gray-light">{{ $t("contact") }}</a>
          <a href="#"
            class="text-brand-gray-light">{{ $t("help") }}</a>
        </div>

        <div class="flex flex-row space-x-14">
          <div class="flex flex-row space-x-2 ml-12 text-brand-gray-light">
            <h2>{{ $t("account") }}</h2>
            <img src="@/assets/images/arrow.svg"
                alt="arrow icon" />
          </div>

          <div class="flex flex-row space-x-2">
            <img src="@/assets/images/bag.png"
                alt="bag" />
            <div>3</div>
            <h3>{{ $t("items") }}</h3>
          </div>
        </div>
      </div>
    </nav>
    <img src="@/assets/images/line.svg"
        alt="horisontal line" />
  </section>
</template>

<script>
export default {
  name: 'CNavBar',
};
</script>
