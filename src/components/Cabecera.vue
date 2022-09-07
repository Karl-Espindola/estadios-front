<template>

<div class="head">
    <h2>Estadios CX</h2>
    <button>Crear estadio</button>
</div>

</template>

<script>
export default{
    name:"Cabecera",
}
</script>

<style>
.head{
  display: flex;
  justify-content:space-between;
  margin-bottom:20px;
  padding:0 20px;
  width: 550px;
}
.head h2{
  margin: 0;
  padding:0;
}
button{
  height:30px;
  border-radius:10px;
  padding: 0 20px;
  background-color: #905AFB;
  color:white;
  border:none;
  cursor:pointer;

}
</style>