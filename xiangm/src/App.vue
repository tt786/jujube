<template>
  <div id="app">
    <el-table id="table"></el-table>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/* #app::before{
  content: "";
  background: url(./assets/d702fcfcd7ee4defa2dffdea3fdbf4e3.jpg);
  position:absolute;
  opacity: 0.5;
  z-index: -1;
  background-size: cover;
} */
  #app{
    background: url(./assets/d702fcfcd7ee4defa2dffdea3fdbf4e3.jpg);
    background-size: cover; 
    background-attachment: scroll;
    /* background-repeat: repeat-y; */
    width: 100%;
    height: 100%;
  }
  #table{
    height: 0px;
  }
</style>
