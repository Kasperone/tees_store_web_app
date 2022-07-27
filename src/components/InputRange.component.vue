<template>
  <div>
        <p 
        for='range' 
        class='font-bold text-gray-600'>
        {{ text }}
        </p>
        <input 
        type='range' 
        min='1' 
        max='10'  
        value='1' 
        name='range' 
        class='w-[26.5rem] h-px bg-black cursor-pointer  appearance-none slider-thumb ' />
    </div>
</template>

<script>
export default {
    
    name: 'cInputRange',

    props: {

        text:{
            type:String,
            default:'Rozmycie'
        } 
    }

}
</script>
