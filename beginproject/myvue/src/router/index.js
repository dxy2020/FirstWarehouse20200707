import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";
import PlanServices from "@/components/home-aside/second-menu/PlanServices.vue";
import PlanServicesRationalityAnalysis from "@/components/home-aside/third-menu/PlanServicesRationalityAnalysis.vue";

Vue.use(VueRouter);//组件

const routes = [
  {
	  	path:"/",//login
	  	name:"Login",
	  	component:Login
  },
  {
	    path: "/home",//home
	    name: "Home",
	    component: Home,
    children:[
      {
        path:"/home/planservices",
        name:"PlanServices",
        component:PlanServices
      },
      {
        path:"/home/planservicesrationalityanalysis",//rationalityAnalysis
        name:"PlanServicesRationalityAnalysis",
        component:PlanServicesRationalityAnalysis
				
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
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
