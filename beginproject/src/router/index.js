import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewContact from "@/components/NewContact";
import Login from "@/views/login/login.vue";
import HomePage from "@/views/homepage/homepage.vue";

Vue.use(VueRouter);//组件

const routes = [
	{
	  	path:"/",
	  	name:"Login",
	  	component:Login
	},
	{
	  	path:"/homepage",
	  	name:"HomePage",
	  	component:HomePage,
		children:[
			{
				path:'/commonwork',
				name:"CommonWork",
				component: {homepage1:() =>
				import("@/components/homepage/commonwork.vue")
				}
			},
			{
				path:'/planningservices',
				name:"PlanningServices",
				component:{homepage1: () =>
				import("@/components/homepage/planningservices.vue")
				}
				
			}
		]
	},
	{
	    path: "/home",
	    name: "Home",
	    component: Home
	},
	{
	    path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
	  import(/* webpackChunkName: "about" */ "../views/About.vue")
	},
  	{
	  	path:"/newContact",
	  	name:"NewContact",
	  	component:NewContact
  	}
  	
];

const router = new VueRouter({//路由
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

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router;
