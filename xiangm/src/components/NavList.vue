<template>
      <div class="navigator">
           <el-menu
            :default-active="this.$route.params"
            router
             class="el-menu-demo"
             mode="horizontal"
              text-color="#000"
              active-text-color="#eb5510"
              v-if="navList.length>0"
              >
                <el-menu-item class="el-menu--demo-item" v-for="(item,index) of navList" :key="index" :index="item.name">{{item.navItem}}</el-menu-item>
                </el-menu>
        </div>
</template>
<script>
export default {
    data(){
        return{
             navList:[
            {name:'/',navItem:'首页'},
            {name:'/Areas',navItem:'产地状况'},
            {name:'/Center',navItem:'产品中心'},
            {name:'/Knowladge',navItem:'冬枣知识'},
            {name:'/News',navItem:'新闻论坛'},
            {name:'/Me',navItem:'关于我们'}
        ]
        }
    }
}
</script>
<style scoped>
 .navigator{
       padding-left: 150px;
       padding-right: 150px;
       background-color: rgb(100, 89, 89);
   }
   .el-menu-demo{
       padding-left: 100px;
       background-color: rgb(187, 186, 184);
       font-size: 30px;
   }
   .el-menu--demo-item{
       padding-left: 50px;
       padding-right: 50px;
       font-size: 18px;
   }
</style>