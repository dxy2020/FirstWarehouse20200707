import axios from "axios";
// import { config } from "vue/types/umd";
import router from "../router";

//请求拦截器
let instance=axios.create({
  baseURL:"http://localhost:8080/", //接口所在域名，将会和传递过来的url进行拼接
  timeout:5000 //过期时间
});

// 添加请求拦截器，在请求头中加token
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization');
//     }
 
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });
// localStorage.removeItem('Authorization');
// this.$router.push('/login');
//设置请求拦截
instance.interceptors.request.use(config=>{
  //判断是否存在token，如果存在将每个页面的header都添加token
  // if(localStorage.getItem(sessionStorage.getItem("id")+'_admin_token')){
  if(localStorage.getItem('Authorization')){
    config.headers.common['XX-Device-Type']="mobile";
    // config.headers.common['XX-Token']=localStorage.getItem(sessionStorage.getItem("id")+'_admin_token');
    config.headers.common['XX-Token']=localStorage.getItem(localStorage.getItem('Authorization'));
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
      alert('you login faile!please login one more time').then(()=>{
        that.$router.replace('/login');
      });
    }
    return response;
  },
  error=>{//默认除了2XX之外都为错误
    if(error.response){
      switch(error.response.status){
      case 401:
        this.$store.commit('dleToken');
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
    setData(data);
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
  postFile(url, data) {
    return instance({
      method: 'post',
      headers:{
        'Content-type': 'multipart/form-data'
      },
      url: url,
      data: data,
    }).catch((error) => {
      console.log(error.message);
    });
  },
  get(url, params) {
    setData(params);
    return instance({
      method: 'get',
      url: url,
      params: params,
    }).catch((error) => {
      console.log(error.message);
    });
  },
  delete(url, data) {
    setData(data);
    return instance({
      method: 'delete',
      url: url,
      data: data,
    }).catch((error) => {
      console.log(error.message);
    });
  },
  put(url, data) {
    setData(data);
    return instance({
      method: 'put',
      url: url,
      data: data,
    }).catch((error) => {
      console.log(error.message);
    });
  },

};

function setData(data){
  return data;
}