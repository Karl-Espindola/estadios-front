<template>
  
    <div class="contenedor">
      <p class="etiq">Estadios  > Detalles</p>
      <InfoEstadio></InfoEstadio>
      
    </div>

  </template>
  
  <script>
  
  import InfoEstadio from '@/components/InfoEstadio.vue';
  
  export default {
    name: 'HomeView',
    components: {
      InfoEstadio,
      
    }
  }
  </script>
  <style scoped>
  
  
  .contenedor{
    padding:0 50px;
    background-color: #F4F6F6;
  }
  .etiq{
    padding: 15px 20px;
    
    color: #905AFB;
  }
  </style>