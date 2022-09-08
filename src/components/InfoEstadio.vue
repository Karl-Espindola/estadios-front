<template>
    <div class="tcab">
        <div>
        <span class="nomEstadio">{{estadio.titulo}}</span>
        <hr class="lineaT1"><hr class="lineaT1 linea">
        </div>
        <div class="icons">
            <router-link :to="{name:'editar', params:{id:JSON.stringify(estadio)}}">
                <div class="ico">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.002" viewBox="0 0 18.001 18.002">
                        <g id="icon_editar" data-name="icon / editar" transform="translate(-136.249 -533.25)">
                            <path id="Trazado_20988" data-name="Trazado 20988" d="M555.021,382.656a3.19,3.19,0,0,1,2.256,5.446l-10.832,10.831a1.289,1.289,0,0,1-.506.312l-2.458.827-1.575.52a1.285,1.285,0,0,1-1.452-.472,1.274,1.274,0,0,1-.177-1.16l1.345-4.035a1.288,1.288,0,0,1,.311-.5l10.831-10.831A3.169,3.169,0,0,1,555.021,382.656Zm-9.6,15.181,10.8-10.8a1.69,1.69,0,1,0-2.39-2.39l-10.8,10.8-1.2,3.59,1.174-.388Z" transform="translate(-403.961 150.594)"/>
                            <path id="Línea_2174" data-name="Línea 2174" d="M3.444,4.194a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.974,2.914a.75.75,0,0,1-.53,1.28Z" transform="translate(147.618 536.449)"/>
                        </g>
                    </svg>

                </div>
            </router-link>
            <div class="ico">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20.409" viewBox="0 0 17.5 20.409">
                    <g id="icon_Eliminar" data-name="icon / Eliminar" transform="translate(-187.25 -466.25)">
                        <path id="Trazado_20985" data-name="Trazado 20985" d="M190.3,385.184H203.39a.75.75,0,0,1,.75.75v12.571a4.194,4.194,0,0,1-4.187,4.191h-6.214a4.194,4.194,0,0,1-4.187-4.191V385.934A.75.75,0,0,1,190.3,385.184Zm12.339,1.5H191.051v11.821a2.692,2.692,0,0,0,2.687,2.691h6.214a2.692,2.692,0,0,0,2.687-2.691Z" transform="translate(-0.845 83.963)"/>
                        <path id="Línea_2169" data-name="Línea 2169" d="M0,8.028a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V7.278A.75.75,0,0,1,0,8.028Z" transform="translate(193.818 474.27)"/>
                        <path id="Línea_2170" data-name="Línea 2170" d="M0,8.028a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V7.278A.75.75,0,0,1,0,8.028Z" transform="translate(198.182 474.27)"/>
                        <path id="Línea_2171" data-name="Línea 2171" d="M16,.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H16a.75.75,0,0,1,.75.75A.75.75,0,0,1,16,.75Z" transform="translate(188 469.912)"/>
                        <path id="Trazado_20986" data-name="Trazado 20986" d="M200.118,387.057a.75.75,0,0,1-.637-.353l-.856-1.369a2.532,2.532,0,0,0-4.293,0l-.857,1.37a.75.75,0,0,1-1.272-.8l.857-1.369a4.032,4.032,0,0,1,6.838,0l.856,1.369a.75.75,0,0,1-.635,1.147Z" transform="translate(-0.479 83.605)"/>
                    </g>
                </svg>
            </div>
      </div> 
    </div>

<div class="info">
    <div>
    <div class="packEsta">
        <div class="conteImg">
            <img :src='estadio.src' class="imgEstadio">
            <div class="cTerr">
                <span>{{estadio.nomTerreno}} </span>
                <img :src="estadio.terreno" class="terr">
            </div>
            
        </div>
        
        <div class="liVer">
            <img :src="estadios[0].src" class="terrIco">
            <img :src="estadios[1].src" class="terrIco">
            <img :src="estadios[2].src" class="terrIco">
            <img :src="estadios[3].src" class="terrIco">
            
        </div>
    </div>
    <div class="cup">
        <div class="imgP">
            <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="21.178" viewBox="0 0 23.5 21.178">
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
<div class="contenedorTribunas">
    <div class="añadir"><span>Trubunas</span><button class="icon">Añadir</button></div>
    <div class="tb">
        <div v-for="tribuna of tribunas" class="tribuna">
            
                <span>{{tribuna.nombre}}</span><br>
                <div class="cupo">
                    <span>{{tribuna.cupo}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="21.178" viewBox="0 0 23.5 21.178">
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
                <div class="precio">
                    <span>$ {{tribuna.precio}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.304" viewBox="0 0 16.5 21.304">
                        <g id="Icon_ticket" data-name="Icon / ticket" transform="translate(0.75 0.75)">
                            <g id="ic-ecommerce-invoice" transform="translate(-4.5 -2.11)">
                            <g id="Vrstva_169" data-name="Vrstva 169">
                                <path id="Trazado_141" data-name="Trazado 141" d="M19.13,21.67l-3.39-2.6a.23.23,0,0,0-.29,0l-3.21,2.75a.23.23,0,0,1-.3,0L8.3,19.07a.21.21,0,0,0-.28,0L4.88,21.65a.24.24,0,0,1-.38-.18V4.11a2,2,0,0,1,2-2h11a2,2,0,0,1,2,2V21.49a.23.23,0,0,1-.37.18Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                <line id="Línea_126" data-name="Línea 126" x2="8" transform="translate(7.09 6.22)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                <line id="Línea_127" data-name="Línea 127" x2="5" transform="translate(7.09 10.22)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                <line id="Línea_128" data-name="Línea 128" x2="9" transform="translate(7.09 14.22)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                </div>
            
            <div class="icoEd">
                <div class="ico ico1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.002" viewBox="0 0 18.001 18.002">
                        <g id="icon_editar" data-name="icon / editar" transform="translate(-136.249 -533.25)">
                            <path id="Trazado_20988" data-name="Trazado 20988" d="M555.021,382.656a3.19,3.19,0,0,1,2.256,5.446l-10.832,10.831a1.289,1.289,0,0,1-.506.312l-2.458.827-1.575.52a1.285,1.285,0,0,1-1.452-.472,1.274,1.274,0,0,1-.177-1.16l1.345-4.035a1.288,1.288,0,0,1,.311-.5l10.831-10.831A3.169,3.169,0,0,1,555.021,382.656Zm-9.6,15.181,10.8-10.8a1.69,1.69,0,1,0-2.39-2.39l-10.8,10.8-1.2,3.59,1.174-.388Z" transform="translate(-403.961 150.594)"/>
                            <path id="Línea_2174" data-name="Línea 2174" d="M3.444,4.194a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.974,2.914a.75.75,0,0,1-.53,1.28Z" transform="translate(147.618 536.449)"/>
                        </g>
                    </svg>
                </div>
                <div class="ico ico1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20.409" viewBox="0 0 17.5 20.409">
                        <g id="icon_Eliminar" data-name="icon / Eliminar" transform="translate(-187.25 -466.25)">
                            <path id="Trazado_20985" data-name="Trazado 20985" d="M190.3,385.184H203.39a.75.75,0,0,1,.75.75v12.571a4.194,4.194,0,0,1-4.187,4.191h-6.214a4.194,4.194,0,0,1-4.187-4.191V385.934A.75.75,0,0,1,190.3,385.184Zm12.339,1.5H191.051v11.821a2.692,2.692,0,0,0,2.687,2.691h6.214a2.692,2.692,0,0,0,2.687-2.691Z" transform="translate(-0.845 83.963)"/>
                            <path id="Línea_2169" data-name="Línea 2169" d="M0,8.028a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V7.278A.75.75,0,0,1,0,8.028Z" transform="translate(193.818 474.27)"/>
                            <path id="Línea_2170" data-name="Línea 2170" d="M0,8.028a.75.75,0,0,1-.75-.75V0A.75.75,0,0,1,0-.75.75.75,0,0,1,.75,0V7.278A.75.75,0,0,1,0,8.028Z" transform="translate(198.182 474.27)"/>
                            <path id="Línea_2171" data-name="Línea 2171" d="M16,.75H0A.75.75,0,0,1-.75,0,.75.75,0,0,1,0-.75H16a.75.75,0,0,1,.75.75A.75.75,0,0,1,16,.75Z" transform="translate(188 469.912)"/>
                            <path id="Trazado_20986" data-name="Trazado 20986" d="M200.118,387.057a.75.75,0,0,1-.637-.353l-.856-1.369a2.532,2.532,0,0,0-4.293,0l-.857,1.37a.75.75,0,0,1-1.272-.8l.857-1.369a4.032,4.032,0,0,1,6.838,0l.856,1.369a.75.75,0,0,1-.635,1.147Z" transform="translate(-0.479 83.605)"/>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
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
            ...mapState(["estadios","tribunas"])
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
.cTerr{
    position:absolute;
    right:35px;
    bottom:-30px;
}
.cTerr span{
    position:relative;
    top:-10px;
    left:-10px;
}

.terr {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    border:5px solid rgba(244, 246, 246, 0.4);
}    
.terrIco{
    width: 55px;
    height: 55px;
    border-radius: 15px;
    
}
.liVer{
    height:260px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding:0 10px;

}
.imgP{
    width:30px;
    margin-left:30px;
    padding-top:3px;
    padding-left:5px;
    background-color: black;
    border-radius: 8px;
}
.imgP svg{
    fill: white;
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

.ico svg{
    width:18px;
    fill:white;
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
.tribuna{
    width: 150px;
    
}
.icoEd{
    display:flex;
    justify-content: center;
    position: relative;
    bottom:0px;
    margin-top:20px;
}

.icoEd .ico1{
    margin:0 5px;
}
.ico1 img{
    width: 10px;
}
.cupo{
    display: flex;
    justify-content: space-around;
    background-color: #905AFB;
    padding: 2px;
    margin-top:20px;
    margin-bottom:10px;
    border-radius: 5px;
    color:white;
    font-size: 18px;
    

}
.cupo svg{
    width: 20px;
    fill: white;
}
.precio{
    display: flex;
    justify-content: space-around;
}
.precio svg{
    width: 25px;
}
.precio span{
    font-weight: bold;
}
.contenedorTribunas{
    margin-top:50px;
}
.tribuna{
    height:170px;
    width: 130px;
    margin-right:30px;
    margin-bottom: 50px;
    padding:10px;
    
    text-align: center;
    font-size: 18px;
    position: relative;
}
.añadir{
    font-size:20px;
    font-weight: bold;
    display:flex;
    width:250px;
    justify-content:space-between;
    margin-bottom: 50px;
}
.añadir span{
    font-size:25px;
    font-weight: bold;
}
.añadir button{
    width: 100px;
    padding: 0 30px;
    text-align: center;
}
.tribuna>span{
    position:absolute;
    top: 0px;
    left:0;
    width: 100%;
    
   
}
.tb{
    display:flex;
    
}
</style>