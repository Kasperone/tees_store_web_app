<template>
  <h1>HomeView</h1>
  <div>
 <c-account/>
 
  </div>
 
  
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
