<template>
    <div class="index11">
        <Header/>
        <NavList/>
        <TitlePic/>  
        <div class="knowladge_index">
            <div class="goodDetails_name_img">
                 <div class="Imgstyle">
                    <img :src="ImgUrl" >
                </div>
            <div class="little_img">
                <ul v-for="(img,i) of imgUrl" :key="i" >
                    <li @click="getIndex(img.url)">
                        <img :src="img.url" style="width:100px;height:100px">
                    </li>
                </ul>
            </div>
        </div>
        <div class="knowladge_content">
            <ul class="ul_tab">
                <li>
                    <router-link to='/'>Go首页</router-link>
                </li>
                <li @click="showKnow(1)">
                    <a>营养价值</a>
                    </li>
                <li @click="showKnow(2)">
                    <a>冬枣管理</a>
                    </li>
            </ul>
            <div class="knowladge_content_text" v-for="(item,index) of showKnowledge" :key=index>
               
                <div>{{item.kn_content1}}</div>
        </div>
        </div>
        
    </div>
    <Footer/>
</div>
</template>
<script>
import Header from '../views/Header'
import NavList from '../components/NavList'
import TitlePic from '../components/TitlePic'
import Footer from '../views/Footer'
export default {
    components:{Header,NavList,TitlePic,Footer},
    data(){
        return{
            imgUrl:[
                {index:1,url:require('../assets/img/knowledge/u=3625808275,3321567470&fm=26&gp=0.jpg')},
                {index:2,url:require('../assets/img/knowledge/timg (8).jpg')},
                {index:3,url:require('../assets/img/knowledge/timg (10).jpg')},
                {index:4,url:require('../assets/img/knowledge/timg.jpg')},
                
            ],
            ImgUrl:require('../assets/img/knowledge/u=3625808275,3321567470&fm=26&gp=0.jpg'),
            showKnowledge:[],
        }
    },
    created(){
        this.loadKnow();
    },
    methods:{
        getIndex(imgUrl){
            this.ImgUrl=imgUrl;
            console.log(this.ImgUrl)
        },
        loadKnow(){
             this.$axios.get("/knowladge",{
                params:{
                    id:1
                }
            }).then(res=>{
                this.showKnowledge = res.data;
                console.log(this.showKnowledge);
            })
        },
        showKnow(kid){
            var kn_id = kid;
            this.$axios.get("/knowladge",{
                params:{
                    id:kn_id
                }
            }).then(res=>{
                this.showKnowledge = res.data;
                console.log(this.showKnowledge);
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
.knowladge_index{
    background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
     display: flex;
     justify-content:space-between;
     flex-flow: nowrap;
    /* padding-top: 100px; */
}
.knowladge_content{
    padding: 0 30px;
    margin-top: 20px;
}
.knowladge_content_text{
    margin-top: 31px;
}
.ul_tab{
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
.goodDetails_name_img{
    margin-top: 100px;
    margin-left: 30px;
    margin-bottom: 50px;
}

.Imgstyle>img{
    border-radius: 20px;
     width: 500px;
    height: 500px;
}
.little_img>ul{
    list-style:none;
}
.little_img>ul>li img{
    border-radius: 5px;
}

</style>