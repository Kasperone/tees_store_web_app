<template>
    <main class='flex gap-5 justify-center' >
        <div class='w-[47rem] h-[48.25rem] bg-brand-blue-1 rounded-[0.625rem] relative'>
            <nav class='mt-[2.125rem] absolute'> 

              <c-Account/>   
            </nav>

        <header >
            <c-Title class='mt-[7rem] ml-[1.563rem] absolute' 
                     :text='$t("t-shirt preview")'/>
        </header>

        <section class='mt-[9.375rem] ml-[6.25rem] absolute'>
            <div class='flex'>

                <div class="bg-[url('@/assets/images/tshirt-front.png')] w-[14.063rem] h-[15.625rem]"></div>
                <div class="bg-[url('@/assets/images/tshirt-back.png')] w-[14.063rem] h-[15.625rem] ml-[6.25rem]"></div>
        
            </div>

        </section>
            <header >
                <c-Title class='mt-[27.5rem] ml-[1.563rem] absolute' 
                         :text='$t("place of printing")'/>
            </header>
       
                <section class='mt-[30rem] ml-[5.30rem] absolute'>

                    <div>
                        <div>
                            <c-RadioBtn 
                            :label-name='$t("front")'
                            :radio-btn-value='tshirtId[0].id'
                            @get-btn-value='getValueBtnFront'/>
                            
                                   
                        </div>

                        <div>
                            <c-RadioBtn 
                            :label-name='$t("back")'
                            :radio-btn-value='tshirtId[1].id'
                            @get-btn-value="getValueBtnBack"/> 
                          
                                  
                        </div>

                        <div>
                            <c-RadioBtn 
                            :label-name='$t("front and back")'
                            :radio-btn-value='tshirtId[2].id'
                            @get-btn-value='getValueBtnBoth'/>
                            

                        </div>
                        
                    </div>
                  
                </section>

                <div class='w-[43.375rem] border-t-4 absolute mt-[36.875rem] ml-[2.125rem] border-indigo-500 '></div>

                <section class='mt-[40.625rem] ml-[28.063rem] absolute'>

                    <cActionBtn 
                    @click="$router.push('hangeofImprintView')" 
                    :text='$t("next")'
                    :disabled='!tshirtCoverPrice'
                    :btnColor='true'/> 
                      

                </section>
        </div>

        <div>
            <cOrderPrv 
            :price-value='tshirtPrice'
            :cover-price='tshirtCoverPrice'/>
            

        </div>
      
    </main>   
</template>

<script>
import cAccount from '@/components/steps/Account.component.vue';
import cTitle from '@/components/Title.component.vue';
import cRadioBtn from '@/components/RadioButton.component.vue';
import cActionBtn from '@/components/ActionButton.component.vue';
import cOrderPrv from '@/components/OrderPreview.component.vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, provide } from 'vue'

export default{
    name: 'vPlaceOfPrintingView',
    components: {
        cAccount,
        cTitle,
        cRadioBtn,
        cActionBtn,
        cOrderPrv
    },

    setup(){

        const store = useStore()
        const router = useRouter();
        const currentPathObject = router.currentRoute.value;
        const tshirtId = computed(() => store.state.tshirtPriceCover);
        const tshirtPrice = computed(() => store.getters.getTshirtPrice)
        const tshirtCoverPrice = computed(() => store.getters.getTshirtCoverPrice[0]);
        const getIsPromoCodeActive = computed(() => store.getters.getIsPromoCodeActive)
        const currentPage = computed(() => store.getters.getPathNumber)

        store.dispatch( 'routerName', currentPathObject.name )

        provide( 'number', currentPage.value[0] )

        function getValueBtnFront(payload){
            store.dispatch( 'valueBtnFront', payload )        
        }
        
         function getValueBtnBack(payload){
            store.dispatch( 'valueBtnBack', payload )
        }

         function getValueBtnBoth(payload){
            store.dispatch( 'valueBtnBoth', payload )
        }

        return {
            router, 
            currentPathObject, 
            currentPage,  
            tshirtId,
            tshirtPrice,
            tshirtCoverPrice,
            getIsPromoCodeActive,
            getValueBtnFront,
            getValueBtnBack,
            getValueBtnBoth
        }
    }
}
</script>