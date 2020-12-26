<template>
    <div class="index11">
        <Header/>
        <NavList/>
        <div class="index" :style="{minHeight: minHeight+'px'}">
            <!-- 轮播图 -->
            <div class="carousel">
                <el-carousel class="el-carousel">
                    <el-carousel-item v-for="item in pics" :key="item.url" class="el-carousel-item">
                        <img class="carousel-img" :src="item.url">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 搜索 -->
            <div class="hot">
                <div class="hot1">
                    <span>热门关键字：</span>
                    <a href="#">大荔冬枣</a>
                </div>
                <div class="search">
                    <el-input class="search-input" type="text" placeholder="请输入关键词" prefix-icon="el-icon-search" size="medium"></el-input>
                    <el-button type="success" icon="el-icon-search">搜素</el-button>
                </div>
            </div>
            <!-- 导航栏 -->
            <el-row class="tac">
            <el-col :span="4" class="el-col-1">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                active-text-color="rgb(251, 91, 8)"
                >
                <el-menu-item id="el-menu-item1"  class="el-menu-vertical-demo-item" v-for="item of titleList" :key="item.titleid"  @click="handleSelect(item.titleid)">
                    <span slot="title" >  {{item.titlename}}</span>
                    <i class="el-icon-arrow-right"></i>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col  class="el-col-2"  v-for="(item,index) of ssdetail" :key="index">
            <div class="index-title" >
                    {{item.de_name}}
            </div>
            <div class="index-contain" >
                {{item.de_detail}}
            </div>
        </el-col>
    </el-row>
    <div>
        <p id="map_title" >Welcome to Dali</p>
        <p class="map_point">👇</p>
        <Map/>
    </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
import NavList from '../components/NavList'
import Map from '../components/Map'
  export default {
      components: { Header,Footer,NavList,Map },
    data() {
      return {
        pics:[
            {url:require("../assets/img/index/_20201212120145.jpg")},
            {url:require("../assets/img/index/_20201212120139.jpg")},
        ],
        titleList:[
            {titleid: "1",titlename:"产品特点"},
            {titleid: "2",titlename:"产品环境"},
            {titleid: "3",titlename:"历史渊源"},
            {titleid: "4",titlename:"生产情况"},
            {titleid: "5",titlename:"产品荣誉"},
            {titleid: "6",titlename:"地理标志"},
        ],
        ssdetail:{},
        minHeight:0
      };
    },
    created() {
        this.loadDetail();
    },
     mounted(){
        this.minHeight=document.documentElement.clientHeight-140;
        let that = this;
        window.onresize = function(){
        that.minHeight=document.documentElement.clientHeight-140;
        }
    },
    methods: {
      loadDetail(){
      // 1.创建参数对象
      var obj = { params: { id: 1 } };
      // 2.发送ajax请求
      this.$axios.get("/mindetail",obj).then(result => {
        // 4.获取服务器数据
        this.ssdetail=result.data;
      });
      },
      handleSelect(n){
        // console.log(n)
        var N =n;
        this.$axios.get("/mindetail",{
             params: { 
            id:N
            }
        }).then(res=>{
            // console.log(res.data)
            this.ssdetail=res.data;
        })

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
  
   .index{
       background: rgba(255, 255, 255, 0.5);
       margin-left: 150px;
       margin-right: 150px; 
   }
   .el-carousel,.el-carousel-item{
       height: 400px;
   }
   .carousel-img {
       width: 100%;
       height: 400px;
   }
   .hot{
       display: flex;
       justify-content: space-between;
       background-color: rgb(224, 221, 221);
       border-bottom: 2px solid rgb(187, 185, 185);
   }
   .hot1{
       padding:20px 40px;
       font-size: 18px;
   }
   .hot1>span{
       color: #000;
       font-weight:bolder;
   }
   .hot1>a{
        text-decoration: none;
        color: rgb(0, 0, 0);
   }
   .search{
       padding:10px 40px;
       display: flex;
       vertical-align:bottom;
   }
   .search-input{
       margin-right: 10px;
       vertical-align: top;
   }
   .tac{
       padding-top: 10px;
      display: flex;
      justify-content: flex-start;
   }
   .el-col-1{
       left: -200px;
   }
   .el-menu-vertical-demo{
       border: 1px solid rgb(179, 177, 177);
        border-radius: 20px; 
       background-color:rgba(255, 255, 255, 0.5);
       color:#000;
   }
    .el-menu--demo-item{
      padding-right: 60px;
   }
   .el-menu-vertical-demo-item{
       padding-right: 89px;
   }
    .el-menu-vertical-demo-item:hover{
       background-color: rgb(100, 89, 89);
       color: rgb(251, 91, 8);
   }
     #el-menu-item1:hover{
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
   }
    #el-menu-item1:focus{
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
   }
    #el-menu-item2:hover{
       border-bottom-left-radius: 20px;
       border-bottom-right-radius: 20px;
   }
   #el-menu-item2:focus{
       border-bottom-left-radius: 20px;
       border-bottom-right-radius: 20px;
   }
   .el-col-2{
       margin-left: 20px;
       background-color: rgba(255, 255, 255, 0.5);
       border-radius: 20px;
   }
   .index-title{
       /* text-align: center; */
       padding-top: 20px;
       padding-bottom: 30px;
       padding-left: 350px;
       font-size: 30px;
       font-family: 'Courier New', Courier, monospace;
   }
   .index-contain{
       padding-right: 80px;
       padding-left: 10px;
   }
   #map_title{
       margin: 0 auto;
       margin-top: 50px;
      width: 300px;
      height: 35px;

      font:  24px "Microsoft Yahei", 黑体, sans-serif;
       
   }
.map_point{
     width: 150px;
      height: 10px;
      margin: 0 auto;
}
</style>