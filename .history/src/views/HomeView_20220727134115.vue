<template>
  <h1>HomeView</h1>
  <c-account/>
 
  
</template>

<script >
import cAccount from "@/components/Account.component.vue";

export default{
  name:'HomeView',

  components:{
   cAccount,
    cNavbar
  }
}



</script>
