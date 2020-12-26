<template>
<div class="container">
    <Header/>
    <div class="login-box">
        <el-form
         ref="form"
         :model="loginform" 
         :rules="loginrules" 
         label-width="80px" 
         status-icon>
            <h2 class="logining">欢迎登录</h2>
            <el-form-item label="用户名" prop="phone">
                <el-input 
                v-model="loginform.phone" 
                placeholder="请输入手机号" 
                prefix-icon="el-icon-user" 
                autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input 
                type="password" 
                v-model="loginform.password" 
                placeholder="请输入密码" 
                prefix-icon="el-icon-lock" 
                autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="handelLogin" class="submiting">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>
<script>
import Header from '../views/Header'
    export default {
        components:{Header},
        data() {
            var checkPhone = (rule, value,callback)=>{
                let reg = /^1[3-8]\d{9}$/i;
                if(value === ''){
                    callback(new Error('请输入手机号'))
                }else if(reg.test(value)){
                    callback();
                }else{
                    callback(new Error('手机号格式错误。请重新输入'));
                };
            // var validatePass = (rule, value, callback) => {
            //     let reg = /^[a-zA-Z0-9_]{6,12}$/;
            //     if(value === ''){
            //         callback(new Error('请输入密码'));
            //     }else if(reg.test(value)){
            //         callback();
            //     }else{
            //         new Error('长度在6到12字符');
            //     }
            // }
         }
        return {
             loginform: {
                 phone: '',
                 password: '',
                },
             loginrules:{
                phone:[
                     {validator: checkPhone,trigger: 'blur' },
                 ],
                password:[
                    {required: true, message:'请输入密码',trigger:'blur'},
                    {min:6,max:6,message:'密码为6位字符',trigger:'change'}
                ]
              }
           }   
    },
 methods:{
    handelLogin(){
        this.$refs.loginform.validate(valid => {
             if(valid){
                 let data=`username=${this.loginform.phone}&password=${this.loginform.password}`;
                 this.$axios.post('/login').then((res,err)=>{
                     if(res.data.code === 1){
                         this.$router.push('/index')
                          this.$notify({
                            title: '提示',
                            message: '登录成功',
                            duration: 3000
                            });
                        }else{this.$messagebox("登录提示","登录失败");} 
                    })//then
                 }//if
            })
        }//login
    }//methods
 }
                

               
</script>
<style >
.container{
    font-weight: bolder;
    color: #303133;
}
    .login-box{
        width: 500px;
        height: 280px;
        border: 1px solid #DCDFE6;
        margin: 150px auto;
        padding: 20px 50px 20px 30px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px #F2F6FC; 
         background-color: rgba(72, 85, 24, 0.3);
    }
    .logining{
        text-align: center;
        margin-bottom: 40px;
    }
    .submiting{
        display: block;
        margin: 0 260px 0 135px;
    }
</style>