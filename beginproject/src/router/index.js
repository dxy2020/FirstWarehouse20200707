import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/login.vue";
import HomePage from "@/views/homepage/homepage.vue";
import PlanService from "@/components/homepage/planservice.vue";
import Home from "@/views/home.vue";
// import LeftMenu from "@/components/homepage/leftmenu";
import RationalityAnalysis from "@/components/homepage/rationalityAnalysis.vue";
import DrawerChart from "@/components/homepage/drawerchart.vue";
import TableChart from "@/components/homepage/tablechart.vue";

Vue.use(VueRouter);//组件

const routes = [
	{
		path:"/",//tablechart
		name:"TableChart",
		component:TableChart,		
	},
	{
		path:"/drawerchart",//drawerchart
		name:"DrawerChart",
		component:DrawerChart,		
	},
	// {
	// 	path:"/leftmenu",
	// 	name:"LeftMenu",
	// 	component:LeftMenu,		
	// },
	// {
	// 	path:"/",//rationalityAnalysis
	// 	name:"RationalityAnalysis",
	// 	component:RationalityAnalysis
	// },
	{
	  	path:"/login",
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
			}
			// {
			// 	path:'/planservice',
			// 	name:"PlanService",
			// 	component:{homepage1: () =>
			// 	import("@/components/homepage/planservice.vue")
			// 	}
				
			// }
		]
	},
	{
	    path: "/home",
	    name: "Home",
	    component: Home,
		children:[
			{
				path:"/home/planservice",
				name:"PlanService",
				component:PlanService,
				// redirect:'/home/planservice/rationalityAnalysis',
				// children:[
				// 	{					
				// 		path:"rationalityAnalysis",//rationalityAnalysis
				// 		name:"RationalityAnalysis",
				// 		component:RationalityAnalysis					
						
				// 	}
				// ]
			},
			{
				path:"/home/rationalityAnalysis",//rationalityAnalysis
				name:"RationalityAnalysis",
				component:RationalityAnalysis					
				
			}
		]
	}
	// {
	//     path: "/about",
	// 	name: "About",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	//   import(/* webpackChunkName: "about" */ "../views/About.vue")
	// }
  	
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
