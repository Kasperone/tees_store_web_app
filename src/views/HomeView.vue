<template>
  <h1>HomeView</h1>
    <router-link :to="{ name: 'hangeofImprintView'}">
      User
    </router-link>  
    <c-Account/>
</template>

<script>

import cAccount from '@/components/steps/Account.component.vue'
export default{
  name:'vHome',

  components:{
    cAccount
  },

}
</script>
