<template>
   <c-Account/>
</template>

<script>
import cAccount from '@/components/steps/Account.component.vue';

import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {computed, provide} from 'vue'

export default{

    name:'hangeOfImprintView',

     components:{
         cAccount
    },

    setup(){
        
        const store = useStore()
        const router = useRouter();
        const currentPathObject = router.currentRoute.value;
        const currentPage = computed(()=>store.getters.getPathNumber)
        const bulletNum = computed(()=>store.state.routerNames)
        store.dispatch('routerName', currentPathObject.name)

        provide('number', currentPage.value[0])
        provide('bulletNum', bulletNum)

            return {store, router, currentPathObject, currentPage}

    }
}
</script>