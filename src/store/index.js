import router from '@/router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    estadios:[
      {
        id:0,
        titulo:"Wembley Stadium",
        pais:"Inglaterra",
        ciudad:"Londres",
        nomTerreno:"gramilla",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/wembley-stadium.jpg"),
        terreno:require("../assets/Terrenos-de-juego/gramilla.jpg"),
        cupo:2342
      },
      {
        id:1,
        titulo:"Madison Square Garden",
        pais:"EEUU",
        ciudad:"Nueva York",
        nomTerreno:"madera",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/Madison-Square-Garden.jpg"),
        terreno:require("../assets/Terrenos-de-juego/madera.jpg"),
        cupo:4534
      },
      {
        id:2,
        titulo:"Philippe Chatrier",
        pais:"Fracia",
        ciudad:"Paris",
        nomTerreno:"polvo de ladrillo",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/PhilippeChatrier.jpg"),
        terreno:require("../assets/Terrenos-de-juego/polvo-de-ladrillo.jpg"),
        cupo:3456
      },
      {
        id:3,
        titulo:"Gillette stadium",
        pais:"EEUU",
        ciudad:"Massachusetts",
        nomTerreno:"gramilla sintetica",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/gillette-stadium.jpg"),
        terreno:require("../assets/Terrenos-de-juego/gramilla-sintetica.jpg"),
        cupo:7543
      },
      {
        id:4,
        titulo:"Rogers Centre",
        pais:"Canadá",
        ciudad:"Toronto",
        nomTerreno:"gramilla",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/RogersCentre.jpg"),
        terreno:require("../assets/Terrenos-de-juego/gramilla.jpg"),
        cupo:5372
      }
      
       
    ],
    tribunas:[
      {
        nombre:"Premium Bobby More",
        cupo:15000,
        precio:97000
      },
      {
        nombre:"VIP Club Wembley",
        cupo:8000,
        precio:87000
      },
      {
        nombre:"Zona Plata",
        cupo:1000,
        precio:23000
      },
      {
        nombre:"Occidental Alta",
        cupo:5000,
        precio:14000
      }
    ]
  },
  getters: {
  },
  mutations: {
    guardar(state,array){
      
      let objeto=state.estadios.find(obj=>obj.id===array[0])
      objeto.titulo=array[1];
      objeto.ciudad=array[2];
      objeto.pais=array[3];
      objeto.info=array[4];
      alert("La información se Editó exitosamente")
    }
  },
  actions: {
  },
  modules: {
  }
})
