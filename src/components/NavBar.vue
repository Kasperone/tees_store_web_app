<template>
  <section>
    <nav class="relative container mx-auto py-8">
      <!--flex container-->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="logo">
            <img src="../assets/images/image2logo.png" alt="">
          </h1>
        </div>
        <!--menu items-->
        <div class=" md:flex space-x-16 text-lg ">
          <a href="#" class="text-brand-gray-light">Home</a>
          <a href="#" class="text-brand-gray-light">Shop</a>
          <a href="#" class="text-brand-gray-light">Contact</a>
          <a href="#" class="text-brand-gray-light">Help</a>
        </div>
        <div class="flex flex-row space-x-14">
            <div class="flex flex-row space-x-2 ml-12  text-brand-gray-light">
                <h2>Account</h2>
                <img src="../assets/images/arrow.svg" alt=""></div>
            <div class="flex flex-row space-x-2">
                <img src="../assets/images/bag.png" alt="">
                <div>3</div>
                <h3>items</h3>
            </div>
        </div>
      </div>

    </nav>
    <svg width="1440" height="1" viewBox="0 0 1440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="1440" y2="0.5" stroke="#E2E8F0"/>
</svg>
  </section>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
