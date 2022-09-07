<template>
  <nav>
    <router-link to="/"><img src="./assets/Logo/logoCXstadium2.svg"></router-link>
    <div class="secc">
      <div class="icons">
        <div class="icon"><img src="./assets/otros/icon-usuario.svg"></div>
        <div class="icon"><img src="./assets/otros/Icon-configurar.svg"></div>
      </div> 
      <img src="./assets/Logo/logo-coex.svg">
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

nav {
  padding-left: 70px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  /*font-weight: bold;
  color: #2c3e50;*/
}

nav a.router-link-exact-active {
  /*color: #42b983;*/
}
.icons{
  width:100px;
  height: 35px;
  display:flex;
  justify-content: space-around;
}
.icon{

  padding:10px;
  border-radius:10px;
  cursor:pointer;
  display: flex;
  align-items: center;

}
.icon:hover{
  background-color: #905AFB;
}
.secc{
  width: 300px;
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.secc>img{
  width: 80px;
}
</style>
