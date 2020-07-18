import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewContact from "@/components/NewContact";
import SignUp from "@/components/SignUp";
import HomePage from "@/components/homepage/homepage";

Vue.use(VueRouter);//组件

const routes = [
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
  	},
  	{
	  	path:"/signUp",
	  	name:"SignUp",
	  	component:SignUp
  	},
  	{
	  	path:"/homepage",
	  	name:"HomePage",
	  	component:HomePage
  	}
];

const router = new VueRouter({//路由
  routes
});

export default router;
