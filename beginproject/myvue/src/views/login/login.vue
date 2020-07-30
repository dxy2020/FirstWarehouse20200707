<template>
    <div id="login01">
        <div id="login02">
            <el-form class="login-container" label-position="left" label-width="0px">
                <h3 class="login-title">
                    国土空间基础信息云应用平台
                </h3>
                <p class="login-content">
                    Welcome欢迎登陆
                </p>
                <el-form-item>
                    <el-input
                        v-model="loginForm.username" prefix-icon="el-icon-user-solid" type="text"
                        auto-complete="off" placeholder="账号"
                    />
                </el-form-item>

                <el-form-item>
                    <el-input
                        v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"
                        show-password auto-complete="off" placeholder="密码"
                    /><!--suffix-icon="el-icon-view"--> 
                <!-- <i slot="suffix" class="el-input__icon el-icon-date"></i>-->
                </el-form-item>
                <!--<i slot="suffix" :class="[loginForm.flag?'el-icon-minus':'el-icon-view']"  @click="loginForm.flag=!loginForm.flag" />
        -->
                <!--autocomplete="auto" style="margin-top:8px;font-size:18px;"-->
                <el-form-item>
                    <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="login">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
 
 
<script>
// import axios from 'axios';
import {mapMutations} from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        //flag: false
      },
      responseResult: []
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login() {
      let _this=this;
      if(this.loginForm.username===''||this.loginForm.password===''){
        alert('账号或密码不能为空');
      }else{
      // console.log(this.$axios);
        this.$axios({
          method:'post',
          url:'http://localhost:90/vue-axios/userform.php',
          data:_this.loginForm
        }).then(res=>{
          console.log(_this.loginForm);
          console.log(res);
          //JSON.parse(jsonString);
          // console.log(JSON.parse(res));
          // console.log(JSON.parse(res.data));
          // _this.userToken='Bearer'+res.data.data.body.token;
          _this.userToken='Bearer'+res.data.token;
          // console.log(_this.userToken);
          //将用户token保存到vuex中
          _this.changeLogin({Authorization:_this.userToken});
          _this.$router.push('/homepage');						
          // console.log(_this.changeLogin);
        
        }).catch(error=>{
          console.log(error);
        });
      }
      //this.$router.replace('/homepage');
      // this.$axios
      //     .post('/login', {
      //         username: this.loginForm.username,
      //         password: this.loginForm.password
      //     })
      //     .then(successResponse => {
      //         if (successResponse.data.code === 200) {
      //             this.$router.replace({path: '/index'})
      //         }
      //     })
      //     .catch(failResponse => {
      //     })
    }
  }
};
</script>
 
<style scoped="scoped" lang="scss">
  .label-size-default{
    height: 100%;
    width: 100%;
  }
  @mixin border-radius($radius) {
          border-radius: $radius;
      -ms-border-radius: $radius;
     -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
  }
  .box {
    @include border-radius(10px);
  }
  #login01 {
    @extend .label-size-default;
    position: fixed;
    // background:no-repeat;/*background:url("../assets/eva.jpg") no-repeat;*/
    background: {
      repeat: no-repeat;
      position: center;
      size: cover;
    }
    margin-top: 10%;
  }
  .login-container {
    @include border-radius(15px);
    background:#fff url(img/login.png) no-repeat;
    background-clip: padding-box;
    background-size: 100%;
    margin: auto;
    width: 30%;
    height: 50%;
    padding: 35px 35px 15px 35px;
    /*background: #fff;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    
  } 
  .login-title {
    margin: 0px auto 40px;
    text-align: left;
    color: #505458;
  }
  .login-content{
  	text-align: left;
    margin-bottom: 20px;
  }
  .el-form-item{
    margin-bottom: 30px;
    width: 50%;
  }
  .el-input input{border:0px;outline:none;}
 
 
</style>