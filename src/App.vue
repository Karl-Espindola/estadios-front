<template>
  <nav>
    <router-link to="/"><img src="./assets/Logo/logoCXstadium2.svg"></router-link>
    <div class="secc">
      <div class="icons">
        
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g id="icon_usuario" data-name="icon / usuario" transform="translate(-516 -543)">
              <g id="ic-actions-user" transform="translate(517.298 547.224)">
                <path id="Trazado_42" data-name="Trazado 42" d="M15.7,17.952a.75.75,0,0,1-.723-.551c-.943-3.433-3.344-4.656-5.277-4.656S5.369,13.968,4.425,17.4A.75.75,0,1,1,2.979,17,8.269,8.269,0,0,1,5.64,12.715a6.347,6.347,0,0,1,8.124,0A8.269,8.269,0,0,1,16.425,17a.751.751,0,0,1-.724.949Z" transform="translate(0 -2.696)"/>
                <path id="Elipse_20" data-name="Elipse 20" d="M3.654-.75a4.4,4.4,0,1,1-4.4,4.4A4.409,4.409,0,0,1,3.654-.75Zm0,7.308a2.9,2.9,0,1,0-2.9-2.9A2.907,2.907,0,0,0,3.654,6.558Z" transform="translate(6.048 1.98)"/>
              </g>
              <path id="Elipse_2470" data-name="Elipse 2470" d="M11,1.5A9.5,9.5,0,1,0,20.5,11,9.511,9.511,0,0,0,11,1.5M11,0A11,11,0,1,1,0,11,11,11,0,0,1,11,0Z" transform="translate(516 543)"/>
            </g>
          </svg>
        
        </div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="21.605" height="21.586" viewBox="0 0 21.605 21.586">
            <g id="Icon_configurar" data-name="Icon / configurar" transform="translate(-1.197 -1.217)">
              <path id="Trazado_37" data-name="Trazado 37" d="M12.354,1.217l.118,0a2.766,2.766,0,0,1,2.489,1.871l.007.021.069.225a1.25,1.25,0,0,0,1.671.772l.225-.1a2.75,2.75,0,0,1,3.041.693,2.765,2.765,0,0,1,.438,3.088l-.117.224a1.25,1.25,0,0,0,.624,1.72l.23.094a2.75,2.75,0,0,1-.22,5.129l-.021.007-.23.07a1.25,1.25,0,0,0-.787,1.671l.1.224a2.75,2.75,0,0,1-3.781,3.479l-.224-.117a1.25,1.25,0,0,0-1.72.624l-.095.231a2.75,2.75,0,0,1-5.129-.22l-.007-.021-.07-.23a1.25,1.25,0,0,0-1.671-.787l-.224.1a2.75,2.75,0,0,1-3.041-.693,2.765,2.765,0,0,1-.438-3.088l.117-.224a1.25,1.25,0,0,0-.624-1.72l-.231-.095a2.75,2.75,0,0,1,.22-5.129l.021-.007.23-.07a1.25,1.25,0,0,0,.787-1.671l-.1-.233A2.75,2.75,0,0,1,6.578,3.325a2.764,2.764,0,0,1,1.213.282l.017.009.21.11A1.25,1.25,0,0,0,9.738,3.1l.094-.23A2.749,2.749,0,0,1,12.354,1.217ZM13.536,3.56a1.25,1.25,0,0,0-2.325-.1l-.09.219a2.75,2.75,0,0,1-3.8,1.375l-.2-.107A1.25,1.25,0,0,0,5.406,6.51l.087.2A2.75,2.75,0,0,1,3.76,10.4l-.22.067a1.25,1.25,0,0,0-.1,2.325l.219.09a2.75,2.75,0,0,1,1.375,3.8l-.108.206a1.25,1.25,0,0,0,1.122,1.8A1.243,1.243,0,0,0,6.5,18.6l.208-.089A2.736,2.736,0,0,1,7.768,18.3,2.75,2.75,0,0,1,10.4,20.24l.067.22a1.25,1.25,0,0,0,2.325.1l.09-.219a2.75,2.75,0,0,1,3.8-1.375l.206.108a1.25,1.25,0,0,0,1.4-.2A1.257,1.257,0,0,0,18.6,17.5l-.089-.208A2.75,2.75,0,0,1,20.24,13.6l.22-.067a1.25,1.25,0,0,0,.1-2.325l-.219-.09a2.75,2.75,0,0,1-1.375-3.8l.108-.206a1.25,1.25,0,0,0-1.122-1.8A1.243,1.243,0,0,0,17.5,5.4l-.206.088a2.75,2.75,0,0,1-3.685-1.7Z"/>
              <path id="Elipse_16" data-name="Elipse 16" d="M3.91-.75A4.66,4.66,0,1,1-.75,3.91,4.665,4.665,0,0,1,3.91-.75Zm0,7.82A3.16,3.16,0,1,0,.75,3.91,3.164,3.164,0,0,0,3.91,7.07Z" transform="translate(8.09 8.09)"/>
            </g>
          </svg>
        </div>
      </div> 
      <img src="./assets/Logo/logo-coex.svg">
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
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

.icon:hover svg{
  fill:white;
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
