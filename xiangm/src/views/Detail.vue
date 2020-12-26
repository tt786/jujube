<template>
    <div>
        <Header/>
        <NavList/>
        <div class="index11">
            <!-- <img src="../assets/img/detail/45.png" alt="" style="width:80%">
            -->
            <!-- 商品详情 -->
            <div class="index">
                <div class="nav">
                    <router-link to='/'>Go首页</router-link>
                    <router-link to="/center">产品中心</router-link>
                </div>
             <div class="total_index">
                 <div class="detail_index" v-for="(item,index) of products" :key="index">
                     <img :src="require(`../assets/img/detail/${item.co_img}`)" alt="">
                <!-- 规格 -->
                <div class="detail_rule">
                     <h4>{{item.co_name}}</h4>
                    <p>
                     四斤包邮：{{item.co_price1}}元
                        <span><button @click="sub1()">-</button><input type="text"  v-model="num1" ><button @click="add1()">+</button></span>
                     </p>
                    <p>
                        五斤包邮：{{item.co_price2}}元
                          <span><button @click="sub2()">-</button><input type="text" v-model="num2" ><button @click="add2()">+</button></span>
                     </p>
                     <p>总计：<span>{{item.co_price1}}*{{num1}}</span></p>
                     <p >
                         <button class="view">加入购物车</button>
                         <button class="view">确认付款</button>
                     </p>
                     <p id="kuaidi">*快递随机，不支持指定快递</p>
                     <p>批发量可联系客服：18330459667</p>
                </div>
            </div>
                <!-- 客户评价 -->
                <div class="evaluate">
                   <h3>客户评价</h3>
                   <div>
                       <p>用户名：123</p>
                       <div>很好吃，下次还来</div>
                   </div>
                </div>
            </div>
            </div>
            <img src="../assets/img/detail/ji_7.png" alt="">
            <img src="../assets/img/detail/ji_8.png" alt="">
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from '../views/Header'
import Footer from '../views/Footer'
import NavList from '../components/NavList'
export default {
    components:{Header,Footer,NavList},
    data(){
        return{
            num1:0,
            num2:0,
            products:[]
        }
    },
    mounted(){
        let id = this.$route.params.id;
         console.log(id)
         this.$axios.get("/detail?id=" + id).then((res)=>{
             this.products=res.data;
            console.log(this.products);
     })
    },
    methods:{
        sub1(){
            if(this.num1>0){
                this.num1--;
            }
        },
        add1(){
            this.num1++;
        },
         sub2(){
            if(this.num2>0){
                this.num2--;
            }
        },
        add2(){
            this.num2++;
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
     background-color:#ffffff80;
    border: 1px solid #ffffff80;
    margin-left: 10px;
    margin-right: 10px;
}
.nav{
    padding: 20px 0 20px 20px;
}
.nav>a{
    border: 2px solid rgb(219, 102, 24);
    border-radius: 10px;
    background-color: rgb(245, 129, 51);
    text-decoration:none;
    color: #000;
    cursor:pointer;
    margin-right:10px
}
.total_index{
    display: flex;
     justify-content:space-between;
     flex-flow: nowrap;
}
.detail_index{
     display: flex;
     justify-content:left;
     flex-flow: nowrap;
     margin-top: 40px;
    /* padding-top: 100px; */
}
.detail_index>img{
    width: 400px;
    height: 350px;
    border-radius: 10px;
    margin-right: 30px;
    margin-left: 50px;
}
.detail_rule>p>span input{
    width: 20px;
}
.detail_rule>p>span button{
    margin-right: 10px;
    margin-left: 10px;
}
.evaluate{
    width: 400px;
    height: 500px;
}
.view{
    text-decoration: none;
    background: #27b1f6;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 2px;
    padding: 6px 18px;
    border: none;
}
#kuaidi{
    font-size: 14px;
    color: #f00;
}
</style>
