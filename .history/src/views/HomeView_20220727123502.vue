<template>
  <h1>HomeView</h1>
  <AccountComponent/>
</template>

<script setup>
import AccountComponent from '@/components/Account.component.vue';

export default{
  name:HomeView,

  components:{
    AccountComponent
  }
}
</script>
