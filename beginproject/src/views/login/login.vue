<template>
  <div id="poster">
  	<div id="poster1">
	    <el-form class="login-container" label-position="left" label-width="0px">
	      <h3 class="login_title">国土空间基础信息云应用平台</h3>
	      <p class="login_content">Welcome欢迎登陆</p>
	      <el-form-item>
	        <el-input prefix-icon="el-icon-user-solid" type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
	      </el-form-item>
	 
	      <el-form-item>
	        <el-input prefix-icon="el-icon-lock"  type="password" v-model="loginForm.password" show-password auto-complete="off" placeholder="密码"></el-input><!--suffix-icon="el-icon-view"--> 
	       <!-- <i slot="suffix" class="el-input__icon el-icon-date"></i>-->
	      </el-form-item>
	        <!--<i slot="suffix" :class="[loginForm.flag?'el-icon-minus':'el-icon-view']"  @click="loginForm.flag=!loginForm.flag" />
	        	-->
	        <!--autocomplete="auto" style="margin-top:8px;font-size:18px;"-->
	      <el-form-item>
	        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
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
//                  flag: false
                },
                responseResult: []
            }
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
					})
				}
            	// this.$router.replace('/homepage');
//              this.$axios
//                  .post('/login', {
//                      username: this.loginForm.username,
//                      password: this.loginForm.password
//                  })
//                  .then(successResponse => {
//                      if (successResponse.data.code === 200) {
//                          this.$router.replace({path: '/index'})
//                      }
//                  })
//                  .catch(failResponse => {
//                  })
            }
        }
    }
</script>
 
<style scoped>
  #poster {
    background:no-repeat;/*background:url("../assets/eva.jpg") no-repeat;*/
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
    
  }
  body{
    margin: 0px;
    padding: 0;
  }
  #poster{
	  margin-top:10%;
  }
  /* #poster1{
  	height: 50%;
    width: 50%;
  } */
  .el-form-item{
  	width: 50%;
  
  }
 
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: auto;
    width: 40%;
    height: 60%;
    padding: 35px 35px 15px 35px;
    /*background: #fff;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    background:#fff url(img/login.png) no-repeat;
    background-size:100% 100%;
  }
  
 
  .login_title {
    margin: 0px auto 40px auto;
    text-align: left;
    color: #505458;
  }
  .login_content{
  	text-align: left;
  }
  .el-input input{border:0px;outline:none;}
 
 
</style>