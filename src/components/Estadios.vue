<template>

   <div class="conte">
        <div v-for="(estadio,index) of estadios" class="card">

            <span class="nomEstadio">{{estadio.titulo}}</span>

                <router-link :to="{name:'detalles',params:{id:JSON.stringify(estadio)}}">
                    <img :src="estadio.src" class="imgEstadio" >
                </router-link>

            <img :src="estadio.terreno" class="terreno">
            <div class="cupo">
                <img src="../assets/otros/persons.png" class="imgPer">
                <span class="numPer">{{estadio.cupo}}</span>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name:"Estadios",
        data(){
            return{
                
            }
        },
        
        computed:{
            ...mapState(['estadios']),

        },
        created(){
            return 
        }
    }
</script>

<style>
.imgEstadio{
    width: 250px;
    border-radius: 40px;
    margin-top: 7px;
}
.card{
    width:260px;
    /*border:1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;*/
    position:relative;
    margin:10px;
    padding:5px 10px;
}
.nomEstadio{
    font-size:18px;
    font-weight:bold;
    padding: 0px 20px;
    margin-bottom: 20px;
}
.terreno {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:3px solid gray;
    position:absolute;
    right:40px;
    bottom:20px;
}
.conte{
    display: flex;
    flex-wrap:wrap;
    
    width: 650px;
}
.imgPer{
    width:25px;
    margin-left:20px;
}
.numPer{
    padding-left:10px;
}
.cupo{
    display:flex;
    align-items: center;
    font-size: 12px;
}
</style>