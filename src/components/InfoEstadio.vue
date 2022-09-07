<template>
    <div class="tcab">
        <div>
        <span class="nomEstadio">{{estadio.titulo}}</span>
        <hr class="lineaT1"><hr class="lineaT1 linea">
        </div>
        <div class="icons">
            <router-link :to="{name:'editar', params:{id:JSON.stringify(estadio)}}"><div class="ico"><img src="../assets/otros/icon-editar.svg"></div></router-link>
            <div class="ico"><img src="../assets/otros/icon-Eliminar.svg"></div>
      </div> 
    </div>

<div class="info">
    <div>
    <div class="packEsta">
        <div class="conteImg">
           <img :src='estadio.src' class="imgEstadio">

        <img :src="estadio.terreno" class="terr">
        </div>
        
        <div class="liVer">
            <img :src="e.terreno" class="terrIco" v-for="e of estadios">
            
        </div>
    </div>
    <div class="cup">
        <img src="../assets/otros/persons.png" class="imgP">
        <span class="numP">{{estadio.cupo}}</span>
    </div>
    </div>
    <div class="descrip">
        <span class="mas">+ </span><span class="tituloCiudad">{{estadio.ciudad}}, {{estadio.pais}}</span><br>
        <hr class="lineaT2"><hr class="lineaT2 linea"><br>
        <h2 class="acerca">Acerca</h2>
        <p>{{estadio.info}}</p>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

    export default{
        name:"InfoEstadio",
        mounted(){
            
        },
        data(){
            return{
                estadio:JSON.parse(this.$route.params.id)
            }
        },
        computed:{
            ...mapState(["estadios"])
        }
    }
</script>

<style scoped>
.imgEstadio{
    width:450px;
    
}

.info{
    width:1000px;
    display: flex;
    justify-content: space-between;
    position:relative;
    padding-bottom: 30px;
    
    
}
.packEsta{
    width: 500px;
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.nomEstadio{
    font-size:40px;
    font-weight:bold;
    padding: 0px 0px;
    margin-bottom: 20px;
}
.conteImg{
    width: 450px;
    position:relative;
}
.terr {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:3px solid gray;
    position:absolute;
    right:35px;
    bottom:-10px;
}
.terrIco{
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:3px solid gray;
}
.liVer{
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}
.imgP{
    width:25px;
    margin-left:30px;
}
.numP{
    padding-left:10px;
}
.cup{
    display:flex;
    align-items: center;
    font-size: 12px;
}
.descrip{
    width:450px;
    margin: 0 0px;
}
.descrip p{
    width:90%;
    word-break: break-word;
    padding-right: 0px;
    
}
.lineaT1{
    border:none;
    border-radius: 3px;
    height:4px;
    background-color:yellow;
    margin-left:0px;
    width:80%;
    float:left;
}
.lineaT2{
    border:none;
    border-radius: 3px;
    height:4px;
    background-color: #905AFB;
    
    width:60%;
    float:left;
}
.linea{
    margin:5px;
    width:10px;
    
}
.ico{
padding:10px;
  border-radius:10px;
  cursor:pointer;
  display: flex;
  align-items: center;
  background-color: #905AFB;
}
.tcab{
    display:flex;
    justify-content: space-between;
    width:1000px;
    margin-bottom:20px;
}
.tituloCiudad{
    font-size:25px;
    font-weight: bold;
}
.mas{
    font-size: 35px;
    font-weight: bold;
    color: red;
}
</style>