import { createStore } from 'vuex'

export default createStore({
  state: {
    estadios:[
      {
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
        titulo:"Rogers Centre",
        pais:"Canadá",
        ciudad:"Toronto",
        nomTerreno:"gramilla",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        src:require("../assets/imagenesEstadios/RogersCentre.jpg"),
        terreno:require("../assets/Terrenos-de-juego/gramilla.jpg"),
        cupo:5372
      }
      
       
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
