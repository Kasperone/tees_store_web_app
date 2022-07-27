<template>
  <h1>HomeView</h1>
  <c-account/>
  <c-Navbar/>
  
</template>

<script >
//import cAccount from "@/components/Account.component.vue";
import cNavbar from "@/components/NavBar.vue"
export default{
  name:'HomeView',

  components:{
    //cAccount,
    cNavbar
  }
}



</script>
