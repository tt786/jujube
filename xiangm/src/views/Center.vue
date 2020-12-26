<template>
    <div class="index11">
        <Header/>
        <NavList/>
        <!-- 上层图片 -->
        <TitlePic/>
        <div class="index22" :style="{minHeight: minHeight+'px'}">
            <div class="title">产品规格</div>
            <!-- 产品 -->
            <div class="product_index" v-if="product.length>0">
                 <div class="type" v-for="(item,index) of product" :key=index>
                     <img class="img_pro" :src="require(`../assets/center/${item.co_img}`)" alt="">
                     <router-link :to="`/detail/${item.co_id}`">      
                     <p>规格：{{item.co_name}}</p>
                     <p>特点：{{item.co_description}}</p> 
                     </router-link>
                     
                </div> 
                <div id="clear"></div>
            </div>
            <!-- 农户产品排列 -->
            <div class="title">实体农户</div>
            <div class="product_index"  v-if="intro.length>0">
                <div class="type" v-for="(item,index) of intro" :key=index >
                    <img :src="require(`../assets/img/personal/${item.pe_img}`)" alt="">
                    <router-link :to="`/detail/${item.pe_id}`">
                         <p>户主：{{item.pe_name}}</p>
                         <p>所属枣地情况：{{item.pe_condition}}</p>
                         <p>成熟日期：{{item.pe_time}}</p>
                         <p>联系方式：{{item.pe_phone}}</p>
                         <div>
                            {{item.pe_intro}}
                         </div>
                    </router-link>
                   
                </div> 
            </div>
             <!-- 分页 -->
                <div class="el-page">
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="10">
                    </el-pagination>
                </div>
        </div>
            <Footer/>
    </div>
</template>
<script>
import Header from '../views/Header'
import NavList from '../components/NavList'
import Footer from '../views/Footer'
import TitlePic from '../components/TitlePic.vue'
export default {
      components: { Header,Footer,NavList,TitlePic },
        data() {
            return {
                product:[],
                intro:[],
                minHeight:0
        }
    },
    mounted(){
        this.$axios.get("/rule").then((res)=>{
            this.product = res.data;
            //  console.log(this.product);
        })
        this.$axios.get("/center").then((res)=>{
            this.intro = res.data;
            // console.log(this.intro)
        })
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
#banner{
    width: 100%;
    vertical-align: center;
}
.index22{
     background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
}
 .product_index{
    margin-top: 20px;
} 
#clear{
    clear: both;
}
.title{
    padding-top: 40px;
    padding-bottom: 10px;
    font-size: 24px;
   text-align: center;
    border-bottom: 1px solid rgb(144, 146, 146);
}
 .type{
     height: 400px;
     float: left;
     margin: 10px;
     background-color: #cac8c880;
       width: 22%;
    border: 1px solid rgb(100, 99, 99);
    padding:10px;
    margin-top: 10px;
} 
.type>img{
    width: 250px;
    height: 160.5px;
    margin: 10px auto;
    margin-left: 30px;
}
/* .img_pro{
    width: 250px;
    height: 160.5px;
    margin: 10px auto;
    margin-left: 30px;
} */
.el-page{
    text-align: center;
    clear: both;
}
a{
    text-decoration: none;
    color: #000;
}
</style>