<template>
  <div class="container">
  <Header/>
    <el-form 
    ref="registerForm" 
    :model="registerForm"
    :rules="registerRules"
    autocomplete="off"
    label-position="right"
    class="login-box"
    label-width="80px" 
    status-icon
    >
    <h2 class="registering">欢迎注册</h2>
    <el-form-item label="用户名" prop="username" style="color:#070708">
      <el-input
            ref="username"
            v-model="registerForm.username"
            placeholder="请输入手机号"
            name="username"
            type="text"
            auto-complete="on"
            prefix-icon="el-icon-user"
            ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" style="color:#070708">
      <el-input 
        ref="password"
        v-model="registerForm.password"
        placeholder="请输入密码"
        name="password"
        type="password"
        auto-complete="off"
        prefix-icon="el-icon-lock"
        @keyup.enter.native="handleRegister"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="repassword" style="color:#070708">
      <el-input
        ref="repassword"
        v-model="registerForm.repassword"
        placeholder="请再次输入密码"
        type="password"
        name="repassword"
        auto-complete="on"
        prefix-icon="el-icon-lock"
        @keyup.enter.native="handleRegister"
      >
      </el-input>
    </el-form-item>
      <el-form-item >
                <el-button type="primary" @click="handleRegister" class="submiting">注册</el-button>
            </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import qs from 'qs'
import Header from '../views/Header'
export default {
  components:{Header},
  data(){
    var checkUsername = (rule, value,callback)=>{
      let reg = /^1[3-8]\d{9}$/i;
        if(value === ''){
          callback(new Error('请输入手机号'))
         }else if(reg.test(value)){
            callback();
          }else{
              callback(new Error('手机号格式错误,请重新输入'));
          }
      };
        var validatePass = (rule,value,callback)=>{
      if(value===''){
        callback(new Error('请输入密码'));
      }else{
        if(this.registerForm.repassword !== ''){
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule,value,callback)=>{
      if(value === ''){
        callback(new Error('请再次输入密码'));
      }else if(value !== this.registerForm.password){
        callback(new Error('两次密码不一致！'));
      }else{
        callback();
      }
    };
    return{
      registerForm:{
        username:'',
        password:'',
        repassword:''
      },
      registerRules:{
        username:[
          {validator: checkUsername,trigger: 'blur' }
        ],
        password:[
          {validator: validatePass,trigger:'blur'},
          {min:6,max:6,message: '密码为6个字符',trigger:'change'}
        ],
        repassword:[
          {validator:validatePass2,trigger:'blur'},
          {min:6,max:6,message: '密码为6为字符',trigger:'change'}
        ]
      }
    }
  },
  methods:{
    handleRegister(){
      this.$refs.registerForm.validate(valid => {
      // console.log(this.registerForm.username,this.registerForm.password)
        if(valid){
          // let data={
          //     username: this.registerForm.username,
          //     password: this.registerForm.password
          //   }
          let data=`username=${this.registerForm.username}&password=${this.registerForm.password}`;
           // qs.stringify(data)
          this.$axios.post('/register',data).then((res,err)=>{
            if(res.data.code === 1){
                this.$router.push('/login')	//登录验证成功路由实现跳转
                this.$notify({
                  title: '提示',
                  message: '注册成功',
                  duration: 3000
                });
             }else{this.$message("用户名被占用");} 
          })//then
        }else{//if
            console.log('error submit!!');
            return false;
        }
      })
    }
  }
}
</script>
<style>
  .container{
      font-weight: bolder;
      color: #070708;
  }
    .login-box{
          width: 500px;
          height: 350px;
          border: 1px solid #DCDFE6;
          margin-top: 120px;
          margin-left: 450px;
          padding: 20px 50px 20px 30px;
          border-radius: 20px;
          box-shadow: 0px 0px 20px #F2F6FC; 
          background-color: rgba(72, 85, 24, 0.3);
      }
      .registering{
          text-align: center;
          margin-bottom: 40px;
          margin-left: 20px;
      }
      .submiting{
          display: block;
          margin: 0 260px 0 150px;
      }
</style>
