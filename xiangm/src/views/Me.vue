<template>
    <div class="index11" :style="{minHeight: minHeight+'px'}">
         <Header/>
        <NavList/>
        <div class="me_index" >
               <p>1</p>
          

        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../views/Header'
import NavList from '../components/NavList'
import Footer from '../views/Footer'
export default {
    components: { Header,Footer,NavList },
    data(){
        minHeight:0
    },
    mounted(){
        this.minHeight=document.documentElement.clientHeight-140;
        let that = this;
        window.onresize = function(){
        that.minHeight=document.documentElement.clientHeight-140;
        }
    }
}
</script>
<style scoped>
.index11{
    background: url(../assets/d702fcfcd7ee4defa2dffdea3fdbf4e3.jpg);
    background-size: cover;  
     background-attachment: scroll; 
     /* background-repeat: no-repeat; */
}
.me_index{
    background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
    height: 400px;
}
</style>