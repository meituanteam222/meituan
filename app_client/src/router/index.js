import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


const routes = [{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue')
	},
	
	{
		path: '/ruzhu',
		name: 'ruzhu',
		component: () => import('../views/head/Ruzhu.vue')
	},
	{
		path: '/joinus',
		name: 'joinus',
		component: () => import('../views/head/Joinus.vue')
	},
	{
		path: '/xiangqing',
		name: 'xiangqing',
		component: () => import('../views/xiangqing/Xiangqing.vue')
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/Search.vue')
	},
	//我要捐款
	{
		path: '/pay',
		name: 'pay',
		component: () => import('../views/xiangqing/pay.vue')
	},
	//登录后才能查看
	{
		path: '/userinfo',
		name: 'userinfo',
		component: () => import('../views/dengluzhuce/userinfo.vue')
	},
	
	//登录注册
	{
	    path: '/register',
	    name: 'Register',
	    component: () => import('../views/register/Register.vue')
	  },
	  {
	    path: '/login',
	    name: 'Login',
	    component: () => import('../views/login/Login.vue')
	  }
	
	
	
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})



// //全局前置守卫
router.beforeEach((to, from, next) => {
	//用户未登录只能访问首页、登录注册页面
	 // || to.path == "/""
	if (to.path == "/" || to.path == "/register"|| to.path == "/login"|| to.path == "/joinus"|| to.path == "/xiangqing" ) {
next();

	} else {
		
		//去其他页面判断是否登录
		let flag = window.localStorage.getItem("islogin");
		
		//登录过直接放行
		
		if (flag) {
			next()
		} else {
			//未登录则跳转到首页
			// Message({
			// 	message: '您尚未登录哦，请先登录！',
			// 	type: 'warning',
			// 	duration: 1500
			// });
			alert("未登录")
			next("/login?path="+to.path);
		
		}
	}
})

export default router
