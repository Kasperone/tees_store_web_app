<template>
  <h1>HomeView</h1>
  <c-account-component/>
</template>

<script setup>
import cAccountComponent from '@/components/Account.Component.vue';

export default{
  name:'HomeView',

  components:{
    'AccountComponent'
  }
}



</script>
