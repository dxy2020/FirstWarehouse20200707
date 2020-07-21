import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
//import Map from "ol/Map";
//import View from "ol/View";
//import TileLayer from "ol/layer/Tile";
//import XYZ from "ol/source/XYZ";
//import "ol/ol.css";
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;



// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });
// localStorage.removeItem('Authorization');
// this.$router.push('/login');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
