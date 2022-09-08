<template>

   <div class="conte">
        <div v-for="(estadio,index) of estadios" class="card">

            <span class="nomEstadio">{{estadio.titulo}}</span>

                <router-link :to="{name:'detalles',params:{id:JSON.stringify(estadio)}}">
                    <img :src="estadio.src" class="imgEstadio" >
                </router-link>

            <img :src="estadio.terreno" class="terreno">
            <div class="cupo">
                <div class="imgPer">
                <svg xmlns="http://www.w3.org/2000/svg"  width="23.5" height="21.178" viewBox="0 0 23.5 21.178">
                    <g id="icon_espectadores" data-name="icon / espectadores" transform="translate(-0.611 -2.25)">
                        <path id="Trazado_21070" data-name="Trazado 21070" d="M14.734,22.75H9.265a2.75,2.75,0,0,1-2.729-3.091l.641-5.124A3.756,3.756,0,0,1,10.9,11.25h2.2a3.756,3.756,0,0,1,3.722,3.285l.64,5.124a2.75,2.75,0,0,1-2.729,3.091Zm-3.837-10a2.254,2.254,0,0,0-2.232,1.971l-.641,5.124a1.25,1.25,0,0,0,1.24,1.4v0h5.469a1.25,1.25,0,0,0,1.241-1.405l-.64-5.124A2.253,2.253,0,0,0,13.1,12.75Z" transform="translate(0.361 0.678)"/>
                        <path id="Elipse_2472" data-name="Elipse 2472" d="M3-.75A3.75,3.75,0,1,1-.75,3,3.754,3.754,0,0,1,3-.75Zm0,6A2.25,2.25,0,1,0,.75,3,2.253,2.253,0,0,0,3,5.25Z" transform="translate(9.361 3)"/>
                        <path id="Elipse_2473" data-name="Elipse 2473" d="M2-.75A2.75,2.75,0,1,1-.75,2,2.753,2.753,0,0,1,2-.75Zm0,4A1.25,1.25,0,1,0,.75,2,1.251,1.251,0,0,0,2,3.25Z" transform="translate(2 8.212)"/>
                        <path id="Elipse_2474" data-name="Elipse 2474" d="M2-.75A2.75,2.75,0,1,1-.75,2,2.753,2.753,0,0,1,2-.75Zm0,4A1.25,1.25,0,1,0,.75,2,1.251,1.251,0,0,0,2,3.25Z" transform="translate(18.721 8.212)"/>
                        <path id="Trazado_21071" data-name="Trazado 21071" d="M7,20.75H3.361a2.75,2.75,0,0,1-2.713-3.2l.333-2a2.742,2.742,0,0,1,2.713-2.3H4a.75.75,0,1,1,0,1.5H3.694a1.246,1.246,0,0,0-1.233,1.045l-.333,2A1.25,1.25,0,0,0,3.361,19.25H7a.75.75,0,0,1,0,1.5Z" transform="translate(0 0.678)"/>
                        <path id="Trazado_21072" data-name="Trazado 21072" d="M20.639,20.75H17a.75.75,0,0,1,0-1.5h3.639a1.25,1.25,0,0,0,1.233-1.456l-.333-2a1.246,1.246,0,0,0-1.233-1.044H20a.75.75,0,0,1,0-1.5h.306a2.742,2.742,0,0,1,2.713,2.3l.333,2a2.75,2.75,0,0,1-2.713,3.2Z" transform="translate(0.721 0.678)"/>
                    </g>
                </svg>
                </div>
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
    border:4px solid rgba(244, 246, 246, 0.4);
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
    padding-top:3px;
    padding-left:5px;
    background-color: black;
    border-radius: 8px;
}
.imgPer svg{
    fill:white;
    width:20px;
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