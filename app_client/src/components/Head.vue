<template>
	<div id="mybox" >
		<div class="content">
			<div style="width: 88%; margin: 0 auto;">
		<!-- 头部固定导航栏 -->
		<el-menu class="el-menu-demo" mode="horizontal">
			<!-- 左侧logo -->
			<el-menu-item index="1">
				<router-link to="/"><img id="imglogo" src="../img/mtuanlogo.png" /></router-link>
			</el-menu-item>
			<!-- 首页 -->
			<el-menu-item index="1">
				<router-link to="/">
					<el-menu-item id="shouye" @click='fn1' index="1">首页</el-menu-item>
				</router-link>
			</el-menu-item>
			<!-- 机构入驻 -->
			<el-menu-item index="1">
				<router-link to="/ruzhu">
					<el-menu-item index="1" id="ruzhu" @click='fn2'>
						机构入驻
					</el-menu-item>
				</router-link>
			</el-menu-item>
			<!-- 加入我们 -->
			<el-menu-item index="1">
				<router-link to="/joinus">
					<el-menu-item index="1" @click='fn3' id='guanyu'>
						关于我们
					</el-menu-item>
				</router-link>
			</el-menu-item>
			
			
		</el-menu>
		
		<!-- 输入框 -->
		<div class="inp">
			<input style="text-indent: 5px;" v-model="keyword" type="text" placeholder="请输入机构/项目名字" />
			
			<button @click="chaxun" >查询</button>
		</div>
		
		<!-- 登录/注册 -->
		<div class="dengluzuce" v-if="this.headflag">
			<router-link to="/register"><span >立即注册 </span></router-link>
			<!-- <span @click="lijizhuc">立即注册 </span> -->
			<span> &nbsp; &nbsp; | &nbsp; &nbsp; </span>
			<router-link to="/login"><span> 登录</span></router-link>
		</div>
		
		<div  class="dengluzuce"   v-if="!this.headflag">
			<router-link to="/userinfo">{{userphone}}</router-link>
			<span> | </span>
			<span @click="out" style="cursor: pointer;"> 退出登录</span>
			</div>
			
			</div>
	  </div>
	</div>

</template>

<script>
	export default {
		name: '',
		data() {
			return {
				keyword:'',
				arr:[],
				headflag:true,
				userphone:""

			};
		},
		components: {

		},
		mounted() {
			
			// console.log(window.localStorage.getItem("userphone"))
			// 判断是否登录
			// this.userphone=this.$route.query.userphone||0
			if(window.localStorage.getItem("islogin")){
				this.headflag=false;  //如果登录了，就让”登录注册“隐藏，显示用户信息并赋值
				this.userphone= window.localStorage.getItem("userphone")
			}
			
			// console.log(this.$route.query.userphone)
			if(this.$route.query.userphone){
				this.headflag=false;  //如果登录了，就让”登录注册“隐藏，显示用户信息并赋值
				this.userphone=this.$route.query.userphone
			}
			
		},
		methods: {
		
			chaxun(){
				var url = `http://127.0.0.1:7001/search1?keyword=${this.keyword}`
					this.$axios.get(url).then((res) => {
						// console.log(res.data)
						// this.num = res.data.length
						// this.huiarr = res.data.huiarr
						// this.goodsarr = res.data.goodsarr
						// console.log(this.goodsarr)
						
						if(this.$route.path!="/search"){
							this.$router.push({path:'/search'})
						}
						this.$store.commit("changehuiarr",res.data.huiarr) 
						this.$store.commit("changegoodsarr",res.data.goodsarr)
					})
				
			},
			fn1() {
				document.querySelector('#shouye').style.color = '#F55724'
				document.querySelector('#shouye').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('#ruzhu').style.color = 'black'
				document.querySelector('#guanyu').style.color = 'black'
				document.querySelector('#ruzhu').style.borderBottom = ' none'
				document.querySelector('#guanyu').style.borderBottom = ' none'
				
		
			
			},
			fn2() {
				document.querySelector('#ruzhu').style.color = '#F55724'
				document.querySelector('#ruzhu').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('#shouye').style.color = 'black'
				document.querySelector('#guanyu').style.color = 'black'
				document.querySelector('#guanyu').style.borderBottom = ' none'
				document.querySelector('#shouye').style.borderBottom = ' none'
			},
			fn3() {
				document.querySelector('#guanyu').style.color = '#F55724'
				document.querySelector('#guanyu').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('#ruzhu').style.color = 'black'
				document.querySelector('#shouye').style.color = 'black'
				document.querySelector('#ruzhu').style.borderBottom = ' none'
				document.querySelector('#shouye').style.borderBottom = ' none'
			},
			//退出登录
			out(){
				var url = `http://127.0.0.1:7001/out`
					this.$axios.get(url).then((res) => {
						window.localStorage.clear();
						// this.userphone= window.localStorage.getItem("userphone")
						this.$router.push({path:'/'})
						this.headflag=true
					})
					
			},
			//登录注册
			
			

		}
	}
</script>

<style scoped>
	
	#mybox{
		width: 100%;
		/* overflow: hidden; */
		/* width: 1100px; */
		/* background-color: red; */
		height: 50px;
	}
	#imglogo {
		width: 140px;
		height: 40px;
	}
	.content{
		width: 100%;
		background-color: #FFFFFF;
		/* background-color: #409EFF; */
		margin: 0 auto;
		position: relative;
	}

	#shouye {
		color: #F55724;
		/* border-bottom: 2px solid red; */

	}

/* 	el-menu-demo {
		position: relative;
	} */
	a {
		text-decoration: none;
	}

	.router-link-active {
		text-decoration: none;
		color: #475669;
	}

	.inp {
		width: 260px;
		height: 35px;
		position: absolute;
		left: 680px;
		top: 9px;
		border: 1px solid rgb(118, 118, 118);
	}

	.inp input {
		height: 33px;
		width: 200px;
		border: none;
		border-right: 1px solid rgb(118, 118, 118);

	}

	.inp input:focus,
	.dengluzuce:focus{
		outline: none;
	}

	.inp button {
		height: 33px;
		width: 55px;
		background-color: white;
		border: none;
		color: rgb(118, 118, 118);
		outline: none;
		cursor: pointer;
	}

	.dengluzuce {
		width: 260px;
		height: 34px;
		position: absolute;
		left: 1040px;
		top: 14px;
		color: rgb(118, 118, 118);
	}
/* 	.el-menu--horizontal>.el-menu-item.is-active{
		border-bottom:none;
	}
	.el-menu-item.is-active {
	    color:  black;
	} */
	
</style>

<!-- <style>
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 60px;
        line-height: 60px;
		background-color: #409EFF;
        border-bottom: 2px solid transparent;
        color: #fff;
        font-size: 20px;
    }
</style> -->