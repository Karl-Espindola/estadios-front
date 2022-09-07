<template>
  
  <div class="contenedor">
    <p class="etiq">Estadios  ></p>
    
    <Cabecera></Cabecera>
    <Estadios></Estadios>
    
 
  </div>
  
  
</template>

<script>
import Estadios from '@/components/Estadios.vue';
import Cabecera from '@/components/Cabecera.vue';


export default {
  name: 'HomeView',
  components: {
    Estadios,
    Cabecera
    
  }
}
</script>
<style>


.contenedor{
  padding:0 50px;
  background-color: #F4F6F6;
}
.etiq{
  padding: 15px 20px;
  
  color: #905AFB;
}
</style>

