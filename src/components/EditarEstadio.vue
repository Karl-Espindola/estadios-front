<template>

<div class="editar">
    <span>Editar estadio</span>
    <button>Guardar</button>
</div>
<div class="contenido">
    <div class="infoGeneral">
        <div>
        <span>Información general</span>
        <div class="form">
            <div class="f1">
                <label>Nombre del estadio</label><br>
                <input type="text" v-model="estadio.titulo"><br>
                <label>Acerca del estadio</label><br>
                <textarea v-model="estadio.info"></textarea><br>
                
            </div>
            <div class="f2">
                <label>País</label><br>
                <input type="text" v-model="estadio.pais"><br>
                <label>Ciudad</label><br>
                <input type="text" v-model="estadio.ciudad"><br>
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
                <div class="minImg"><img src="../assets/imagenesEstadios/wembley-stadium.jpg"></div>
                <div class="minImg"><img src="../assets/imagenesEstadios/Madison-Square-Garden.jpg"></div>
                <div class="minImg"><img src="../assets/imagenesEstadios/PhilippeChatrier.jpg"></div>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import { mapState } from 'vuex';

    export default{
        name:"EditarEstadio",
        
        data(){
            return{
                estadio:JSON.parse(this.$route.params.id)
            }
        },
        computed:{
            ...mapState(['estadios'])
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
.minImg img{
    width:150px;
    border-radius: 25px;
    margin: 5px;

}
.contenido{
    padding-bottom:30px;
}
</style>