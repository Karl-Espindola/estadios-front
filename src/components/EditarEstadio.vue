<template>

<div class="editar">
    <span>Editar estadio</span>
    <button @click="guardar(array)">Guardar</button>
</div>
<div class="contenido">
    <div class="infoGeneral">
        <div>
        <span>Información general</span>
        <div class="form">
            <div class="f1">
                <label>Nombre del estadio</label><br>
                <input type="text" v-model="array[1]"><br>
                <label>Acerca del estadio</label><br>
                <textarea v-model="array[4]"></textarea><br>
                
            </div>
            <div class="f2">
                <label>País</label><br>
                <input type="text" v-model="array[3]"><br>
                <label>Ciudad</label><br>
                <input type="text" v-model="array[2]"><br>
                <label>Tipo de terreno</label><br>
                <select>
                    <option v-for="e of estadios">{{e.nomTerreno}}</option>
                </select>
            </div>
        </div>
        </div>
        <div class="imagenes">
            <div class="agreImg">
                <span>Imagenes</span>
                <button>+</button>
            </div>
            <div class="contImg">
                <div class="minImg">
                    <img src="../assets/imagenesEstadios/wembley-stadium.jpg">
                    <div class="ediBorra">
                        <div class="edi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.002" viewBox="0 0 18.001 18.002">
                                <g id="icon_editar" data-name="icon / editar" transform="translate(-136.249 -533.25)">
                                    <path id="Trazado_20988" data-name="Trazado 20988" d="M555.021,382.656a3.19,3.19,0,0,1,2.256,5.446l-10.832,10.831a1.289,1.289,0,0,1-.506.312l-2.458.827-1.575.52a1.285,1.285,0,0,1-1.452-.472,1.274,1.274,0,0,1-.177-1.16l1.345-4.035a1.288,1.288,0,0,1,.311-.5l10.831-10.831A3.169,3.169,0,0,1,555.021,382.656Zm-9.6,15.181,10.8-10.8a1.69,1.69,0,1,0-2.39-2.39l-10.8,10.8-1.2,3.59,1.174-.388Z" transform="translate(-403.961 150.594)"/>
                                    <path id="Línea_2174" data-name="Línea 2174" d="M3.444,4.194a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.974,2.914a.75.75,0,0,1-.53,1.28Z" transform="translate(147.618 536.449)"/>
                                </g>
                            </svg>
                        </div>
                        <div class="borra">
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
                <div class="minImg">
                    <img src="../assets/imagenesEstadios/Madison-Square-Garden.jpg">
                    <div class="ediBorra">
                        <div class="edi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.002" viewBox="0 0 18.001 18.002">
                                <g id="icon_editar" data-name="icon / editar" transform="translate(-136.249 -533.25)">
                                    <path id="Trazado_20988" data-name="Trazado 20988" d="M555.021,382.656a3.19,3.19,0,0,1,2.256,5.446l-10.832,10.831a1.289,1.289,0,0,1-.506.312l-2.458.827-1.575.52a1.285,1.285,0,0,1-1.452-.472,1.274,1.274,0,0,1-.177-1.16l1.345-4.035a1.288,1.288,0,0,1,.311-.5l10.831-10.831A3.169,3.169,0,0,1,555.021,382.656Zm-9.6,15.181,10.8-10.8a1.69,1.69,0,1,0-2.39-2.39l-10.8,10.8-1.2,3.59,1.174-.388Z" transform="translate(-403.961 150.594)"/>
                                    <path id="Línea_2174" data-name="Línea 2174" d="M3.444,4.194a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.974,2.914a.75.75,0,0,1-.53,1.28Z" transform="translate(147.618 536.449)"/>
                                </g>
                            </svg>
                        </div>
                        <div class="borra">
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
                <div class="minImg">
                    <img src="../assets/imagenesEstadios/PhilippeChatrier.jpg">
                    <div class="ediBorra">
                        <div class="edi">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.002" viewBox="0 0 18.001 18.002">
                                <g id="icon_editar" data-name="icon / editar" transform="translate(-136.249 -533.25)">
                                    <path id="Trazado_20988" data-name="Trazado 20988" d="M555.021,382.656a3.19,3.19,0,0,1,2.256,5.446l-10.832,10.831a1.289,1.289,0,0,1-.506.312l-2.458.827-1.575.52a1.285,1.285,0,0,1-1.452-.472,1.274,1.274,0,0,1-.177-1.16l1.345-4.035a1.288,1.288,0,0,1,.311-.5l10.831-10.831A3.169,3.169,0,0,1,555.021,382.656Zm-9.6,15.181,10.8-10.8a1.69,1.69,0,1,0-2.39-2.39l-10.8,10.8-1.2,3.59,1.174-.388Z" transform="translate(-403.961 150.594)"/>
                                    <path id="Línea_2174" data-name="Línea 2174" d="M3.444,4.194a.748.748,0,0,1-.53-.22L-.53.53A.75.75,0,0,1-.53-.53.75.75,0,0,1,.53-.53L3.974,2.914a.75.75,0,0,1-.53,1.28Z" transform="translate(147.618 536.449)"/>
                                </g>
                            </svg>
                        </div>
                        <div class="borra">
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
    </div>
    
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

    export default{
        name:"EditarEstadio",
        mounted(){
            
        },
        data(){
            return{
                estadio:JSON.parse(this.$route.params.id),
                
                array:[
                    JSON.parse(this.$route.params.id).id,
                    JSON.parse(this.$route.params.id).titulo,
                    JSON.parse(this.$route.params.id).ciudad,
                    JSON.parse(this.$route.params.id).pais,
                    JSON.parse(this.$route.params.id).info
                ],

            }
        },
        computed:{
            ...mapState(['estadios'])
        },
        methods:{
            ...mapMutations(['guardar'])
        }
    }
</script>

<style scope>
.editar{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin: 20px 0;
}
.editar span{
    font-size:40px;
    font-weight:bold;
    align-items: center;
}
.form{
    width: 480px;
    display: flex;
    justify-content: space-between;
}
.f1 input{
    width:250px;
    padding: 5px 0;
    margin-bottom:10px;
}
.f2 input{
    
    padding: 5px 0;
    margin-bottom:10px;
}
textarea{
    width:250px;
    height:100px;
    resize:none;

}
select{
    padding: 5px 0;
    width: 173px;
}
label{
    font-size:12px;
    color:gray;
    padding-left: 10px;
}
.form{
    margin-top:25px;
}
.infoGeneral{
    width:1000px;
    display:flex;
    justify-content:space-between;
}
.infoGeneral span{
    font-size: 25px;
    font-weight: bold;
}
.imagenes{
    width:400px;
}
.agreImg{
    display: flex;
    justify-content:space-between;
    margin-bottom: 30px;
}
.contImg{
    display:flex;
    flex-wrap: wrap;

}
.minImg{
    position: relative;
}
.minImg img{
    width:150px;
    border-radius: 25px;
    margin: 5px;

}
.contenido{
    padding-bottom:30px;
}
.ediBorra{
    width:100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    left: 0;
}
.edi, .borra{
    box-sizing: border-box;
    width:27px;
    height: 27px;
    text-align: center;
    padding-top:3px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    

}
.edi{
    margin-right: 7px;
}
.edi svg{
    fill:white;
    width: 13px;
    
}
.borra svg{
    fill:white;
    width:13px;
}
</style>