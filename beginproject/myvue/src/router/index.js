import Vue from "vue";
import store from "../store/index.js";
import VueRouter from "vue-router";
import Login from "@/views/login/Login.vue";
import Home from "@/views/home/Home.vue";
import HomeAsideSecondMenu from "@/views/home/home-aside-second-menu/HomeAsideSecondMenu.vue";
import PlanServicesRationalityAnalysis from "@/views/home/home-aside-third-menu/PlanServicesRationalityAnalysis.vue";
import PlanningService from "@/views/home/home-aside-third-menu/PlanningService.vue";
import LayerManagement from "@/views/home/home-aside-third-menu/LayerManagement.vue";
import {routerBreadcrumb} from "@/utils/breadcrumb-data.js";

Vue.use(VueRouter);//组件

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",//login
    name:"Login",
    component:Login,
    meta:{
      requiresAuth:true
    }
  },
  {
	    path: "/home",//home
	    name: "Home",
	    component: Home,
    children:[
      {
        path:"/home/homeasidesecondmenu",
        name:"HomeAsideSecondMenu",
        component:HomeAsideSecondMenu,
        // meta:{
        //   list:routerBreadcrumb.second_planning_services.list
        // }
      },
      {
        path:"/home/homeasidesecondmenu/planservicesrationalityanalysis",//rationalityAnalysis
        name:"PlanServicesRationalityAnalysis",
        component:PlanServicesRationalityAnalysis,
        meta:{
          list:routerBreadcrumb.third_difference_analysis.list
        }				
      },
      {
        path:"/home/homeasidesecondmenu/planningservice",//规划服务--版本2
        name:"PlanningService",
        component:PlanningService,
        meta:{
          list:routerBreadcrumb.third_planning_service.list
        }				
      },
      {
        path:"/home/homeasidesecondmenu/layermanagement",//规划服务--版本2
        name:"LayerManagement",
        component:LayerManagement,
        meta:{
          list:routerBreadcrumb.third_layer_management.list
        }				
      }
    ]
  }
];

const router = new VueRouter({//路由
  mode : 'history',
  routes
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log(token); 
    if (token === null || token === '') {
      console.log(token);
      next('/login');
    } else {
      next();
    }
  };
  // 在路由中将本地面包屑数据赋值给vuex的组件面包屑数据
  // if(/\/home\/homeasidesecondmenu\//.test(to.path)){
  //   console.log('我是三级菜单');
  // }
  // if(to.path==='/home/homeasidesecondmenu'&&/\/home\/homeasidesecondmenu\//.test(from.path)){
  //   console.log('to.path:',getCharacterNum(to.path,/\//g));
  //   console.log('from.path:',getCharacterNum(from.path,/\//g));
  //   console.log('path.type:',typeof to.path);
  //   store.commit('changeBreadcrumb',[]);
  // };
  //通过统计路径中'/'判断几级菜单
  let toPathNum=getCharacterNum(to.path,/\//g);
  let fromPathNum=getCharacterNum(from.path,/\//g);
  if(toPathNum==2){
    store.commit('changeBreadcrumb',[]);
  }
  if(fromPathNum==3){
    store.commit('openDrawerChart',true);
  }
  //当通过面包屑直接跳转到二级路由或首页时，抽屉状态为false
  // if(/\/home\/homeasidesecondmenu\//.test(from.path)){
  //   store.commit('openDrawerChart',true);
  // }

  if(to.meta.list){
    let list=to.meta.list;
    store.commit('changeBreadcrumb',list);
  }
  //解决面包屑跳转到首页时背景颜色没变化
  if(to.path==='/home'){
    store.state.openSecondMenu=false;
    // store.commit('OpenSecondMenu');//这样有问题
  }
});

//获取字符串包含指定的字符的个数
function getCharacterNum(str,char){
  let result=str.match(char);
  // let result=str.match(/\//g);
  console.log((result||[]).length);
  return (result||[]).length;
};

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
