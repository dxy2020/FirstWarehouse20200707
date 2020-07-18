import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
//import Map from "ol/Map";
//import View from "ol/View";
//import TileLayer from "ol/layer/Tile";
//import XYZ from "ol/source/XYZ";
//import "ol/ol.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
