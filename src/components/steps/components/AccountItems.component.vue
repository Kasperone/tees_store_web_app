<template>
  <div v-for='(item, index) in itemArray' 
       :key='index'>

    <ul class='flex'>
      <li :class="[ currentPage === item.PageName ? 'text-color' :'' ]">
        <span class='text-center ml-2'> {{item.name}} </span>    
       
      </li>

          <li :class="[index === itemLength - 1 ? 'hidden' : '']"   
            class="flex w-24">
            
            <span class='mr-1 m-auto min-w-4'>
              <img src='@/assets/Line.png' 
                   alt='line-photo' w-6 />

            </span>  

              <span class='w-5 h-5 m-auto'>
                <c-Circule :item-number='item.id' />
              </span> 

                <span class="m-auto max-w-4">
                  <img class='ml-1' 
                       src='@/assets/Line.png' 
                       alt="line-photo" />

                </span>

          </li> 
    </ul>   
  </div>
</template>

<script>
import cCircule from '@/components/steps/components/Circule.component.vue';
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  name: 'cAccountItems',
  components: {
    cCircule,
  },
  props: {
    itemArray: {
      type: Array,
      required: true,
    },
  },

  setup(props){

      const store = useStore()
      const currentPage = computed(() => store.state.currentPageName)
      const itemLength = computed(() => props.itemArray.length)

      return {
        currentPage, 
        itemLength
      }
  }
};
</script>


