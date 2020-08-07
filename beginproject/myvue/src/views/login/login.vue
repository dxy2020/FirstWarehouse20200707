<template>
    <div id="login">
        <div id="login-container">
            <el-form class="login-content" label-position="left" label-width="0px">
                <h3 class="login-title">
                    国土空间基础信息云应用平台
                </h3>
                <span class="login-welcome">
                    Welcome欢迎登陆
                </span>
                <el-form-item>
                    <el-input
                        ref="input" v-model="loginForm.username" prefix-icon="el-icon-user-solid"
                        type="text" auto-complete="off" placeholder="账号"
                    />
                </el-form-item>
                <el-form-item>
                    <el-input
                        v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"
                        show-password auto-complete="off" placeholder="密码" @keyup.enter.native="login"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary" style="width: 100%;background: #505458;border: none"
                        @click="login"
                    >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
 
 
<script>
// import axios from 'axios';
import http from "@/api/index.js";
import {mapMutations} from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    };
  },
  mounted(){
    this.$refs['input'].focus();
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login() {
      let _this=this;
      if(this.loginForm.username===''||this.loginForm.password===''){
        alert('账号或密码不能为空');
      }else{
        http.post('/dev-api/vue-axios/userform.php',_this.loginForm).then(res=>{
          if(res.data.status===1){
            _this.userToken='2020'+res.data.data;
            //将用户token保存到vuex中
            _this.changeLogin({Authorization:_this.userToken,username:_this.loginForm.username});
            _this.$router.push('/home');
          }
          else if(res.data.status===2){
            alert('密码错误，重新输入');
          }
          else{
            alert("用户不存在，请申请账号！");
          }          
        });
      }
    },
  }
};
</script>
 
<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
  #login{
    @extend .label-size-default;
    @include labelflex(flex,row,wrap);
    justify-content: center;
    align-items: center;
  }
  #login-container{
    height: 398px;
    width: 697px;
  }
  .login-content {
    @extend .label-size-default;
    @include border-radius(20px);
    background:#fff url(img/login.png) no-repeat;
    background: {
      clip: padding-box;
      size: 100%;
    }
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    @include labelflex(flex,column,nowrap);
    justify-content: center;
    padding: 0px 12px;
  }
  .login-content{
    .login-welcome{
      margin: 12px 0px;
    }
    .el-form-item {
      width: 50%;
      margin: 12px 0px;
    }
  } 
 
</style>