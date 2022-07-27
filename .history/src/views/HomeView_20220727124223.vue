<template>
  <h1>HomeView</h1>
  <c-account-component/>
</template>

<script >
import cAccountComponent from '@/components/Account.component.vue';

export default{
  name:'HomeView',

  components:{
    cAccountComponent
  }
}



</script>
