import axios from "axios";
import router from "../router";

// axios.defaults.baseURL="http://localhost:90/";
// axios.defaults.timeout = 5000;
// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
// };
// const BASE_URL = 'dev-api';
//请求拦截器
let instance=axios.create({
  baseURL:"http://localhost:8080/", //接口所在域名，将会和传递过来的url进行拼接
  timeout:5000 //过期时间
});

// 添加请求拦截器，在请求头中加token
// localStorage.removeItem('Authorization');
// this.$router.push('/login');
//设置请求拦截
instance.interceptors.request.use(config=>{
  //判断是否存在token，如果存在将每个页面的header都添加token
  if(localStorage.getItem('Authorization')){
    config.headers.common['XX-Device-Type']="mobile";
    config.headers.common['XX-Token']=localStorage.getItem('Authorization');
  }
  return config;
},error=>{
  //请求错误
  return Promise.reject(error);
});

//设置响应拦截
instance.interceptors.response.use(
  response=>{
    let that=this;
    if(response.data.code===10001){
      alert('Login failed！Please login again').then(()=>{
        that.$router.replace('/login');
      });
    }
    return response;
  },
  error=>{//默认除了2XX之外都为错误
    if(error.response){
      switch(error.response.status){
      case 401:
        // this.$store.commit('dleToken');
        this.$router.replace({//跳转到登录页面
          path:'/login',
          query:{
            redirect:router.currentRoute.fullPath
          }// 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    }
    return Promise.reject(error.response);
  }
);

export default{
  post(url,data,contenType){
    return instance({
      method:'post',
      headers:{
        // 'Content-type':'application/json'
        'Content-Type':contenType?contenType:'application/json'
      },
      url:url,
      data:data,
    }).catch((error)=>{
      console.log(error.message);
    });
  },
  get(url, params) {
    // console.log(setData(params));
    return instance({
      method: 'get',
      url: url,
      params: params,
    }).catch((error) => {
      console.log(error.message);
    });
  }
};

// function setData(data){
//   return data;
// }