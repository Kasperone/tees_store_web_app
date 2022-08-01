<template>
  <h1>HomeView</h1> 
    <c-Account/>
    <c-RadioBtn/>

</template>

<script>
import cAccount from '@/components/steps/Account.component.vue';
import cRadioBtn from '@/components/RadioButton.component.vue'
export default{
  name:'vHome',
  components:{
    cAccount,
    cRadioBtn
  },

}
</script>
