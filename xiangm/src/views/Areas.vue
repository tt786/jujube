<template>
    <div class="index11">
        <Header/>
        <NavList/>
        <TitlePic/>
        <div class="areas_index">
             <div class="areas_index_title">陕西大荔，致力于创造高品质的中国冬枣</div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
import NavList from '../components/NavList'
import TitlePic from '../components/TitlePic'
export default {
    components:{Header,Footer,NavList,TitlePic},
    data(){
        return{

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
.areas_index{
    background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
     display: flex;
     justify-content:space-between;
     flex-flow: nowrap;
    /* padding-top: 100px; */
}
.areas_index_title{
    margin: 0 auto;
    padding-top: 30px;
    font-size: 30px;
    font-family: "Microsoft Yahei";
}
</style>