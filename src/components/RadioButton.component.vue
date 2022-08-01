<template>
<div>
    
  <input   
    type='radio'
    :id='radioBtnValue'
    name='buttonRadio'
    :value='radioBtnValue'
    @change='getValueBtn'/>

  <span>
    <label 
    :for="radioBtnValue"
    class='inline-block ml-3'>  
    {{ radioBtnValue }}

    </label>

  </span>

  </div>
</template>
<script>

export default{
  name: 'cRadioBtn',
  props: {
    radioBtnValue:{
        type:String,
        default:'Yes'
  }
  },

setup(props, {emit}){

   function getValueBtn(payload) {
   emit("radio-btn-value", payload.target.value);      
   }   

    return{ 
        getValueBtn
    }
}
};
</script>