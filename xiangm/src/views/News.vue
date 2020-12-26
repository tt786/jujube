<template>
    <div class="index11">
         <Header/>
        <NavList/>
        <TitlePic/>
        <div class="news_" :style="{minHeight: minHeight+'px'}">
            <ul class="ul_tab">
                <li>
                    <router-link to='/'>Go首页</router-link>
                </li>
            </ul>
            <div class="news_title">新闻资讯<p>NEWS INFORMATION</p></div>
        <div class="news_index">
            <ul class="ul_news">
                <li v-for="(item,index) of infor" :key="index">
                    <img src="../assets/img/news/u=3525629275,21098011&fm=26&gp=0.jpg" >
                    <a >
                        <h3>{{item.ne_title}}</h3>
                        <p>{{item.ne_smalltitle}}</p>
                    </a>
                </li>
            </ul>
        </div>
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
             infor:[],
             minHeight:0
        }
    },
    created() {
        this.showNews();
    },
    mounted(){
        this.minHeight=document.documentElement.clientHeight-140;
        let that = this;
        window.onresize = function(){
        that.minHeight=document.documentElement.clientHeight-140;
        }
    },
   methods:{
        showNews(){
            console.log(1)
            this.$axios.get("/news").then((res)=>{
                this.infor = res.data;
                console.log(this.infor);
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
.news_{
    background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
}
.ul_tab{
    padding-left: 100px;
    width: 100%;
    /* border: 1px solid  rgb(219, 102, 24); */
    height: 30px;
     list-style:none;
     padding-left: 0;
     border-bottom: 1px dashed #000;
}
.ul_tab>li{
    border: 2px solid rgb(219, 102, 24);
    border-radius: 10px;
    background-color: rgb(245, 129, 51);
}
.ul_tab>li>a{
    text-decoration:none;
    color: #000;
    cursor:pointer
}
.news_title{
    margin-bottom: 30px;
    font-size: 24px;
    text-align: center;
    font-family: "Microsoft Yahei", PingFangSC-Regular, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
.news_title>p{
    color: rgb(107, 105, 105);
    margin: 5px 0 0;
    font-size: 16px;
}
.news_index{
    padding-left: 100px;
    padding-right: 100px;
     
}
.ul_news{
    display: flex;
     flex-flow: wrap;
    width: 100%;
    list-style:none;
} 
.ul_news>li{
    width: 45%;
    display: flex;
    padding-left: 20px;
    padding-right: 30px;
    margin-bottom: 40px;
}
.ul_news>li img{
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border-radius: 20px;
}
.ul_news>li img:hover{
    transform: scale(1.1);
    transition: all 1s;
}
.ul_news>li a{
    color: #000;
    cursor: pointer;
}
</style>