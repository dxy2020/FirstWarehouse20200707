import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/Login.vue";
import Home from "@/views/home/Home.vue";
import HomeAsideSecondMenu from "@/views/home/home-aside-second-menu/HomeAsideSecondMenu.vue";
import PlanServicesRationalityAnalysis from "@/views/home/home-aside-third-menu/PlanServicesRationalityAnalysis.vue";

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
        component:HomeAsideSecondMenu
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
    console.log(token); 
    if (token === null || token === '') {
      console.log(token);
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
