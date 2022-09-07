<template>
    <div class="contenedor">
        <p class="etiq">Estadios  > Editar</p>
        <EditarEstadio></EditarEstadio>
    </div>
</template>

<script>
import EditarEstadio from '@/components/EditarEstadio.vue';
    export default{
        name:"EditarView",
        components:{
            EditarEstadio
        }
    }
</script>
<style >
.contenedor{
    padding-left:70px;
}
</style>