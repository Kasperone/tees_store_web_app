<template>
  <div>
    <ul class='flex'>
      <li class='mr-5 ml-5'>
        {{ text }}
      </li>

        <li v-if="!isLineActive"   
            class="flex w-24">
            
          <span class='mr-1 m-auto min-w-4'>
            <img src='../assets/Line.png' 
                 alt='line-photo' w-6 />

          </span>  

              <span class='w-5 h-5 m-auto'>
                <c-Circule />
              </span> 

                <span class="m-auto max-w-4">
                  <img class='ml-1' 
                       src='../assets/Line.png' 
                       alt="line-photo" />

                </span>

        </li>
    </ul>
  </div>
</template>

<script>
import cCircule from '@/components/Circule.component.vue';

export default {
  name: 'cAccountItems',
  components: {
    cCircule,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    isLineActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
