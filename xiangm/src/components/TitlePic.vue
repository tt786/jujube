<template>
<!-- 上层图片 -->
    <div class="center_top">
            <img src="../assets/center/banner.png" id="banner">
            <div class="nav_bg">
                <h2 class="nav_bg_title">Products</h2>
                <p class="nav_bg_name">产品信息</p>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            name:[]
        }
    },
    mounted(){
       
    }
}
</script>
<style scoped>
#banner{
    width: 100%;
}
.center_top{
    height: 420px;
}
.nav_bg{
    color: #fff;
    width: 100%;
     height: 1.65rem; 
    background: url(../assets/center/nav_bg.png) center center no-repeat;
    background-size: cover;
    bottom: -0.83rem;
    position: relative;
    padding-top:5.36rem;
    z-index: 10;
    top: -68px;
}
.nav_bg_title,.nav_bg_name{
    position: absolute;
    float: left;
}
.nav_bg_title{
    font-size: 33px;
    font-weight: bold;
    font-style: italic;
    left: 400px;
    top: -16px;
}
.nav_bg_name{
    font-size: 22px;
    top: 31px;
    left: 480px;
}
</style>