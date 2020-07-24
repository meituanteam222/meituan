<template>
	<div id="app">
		<!-- 搜索框查询 -->
		<Head></Head>
		
		<div style=" height: 800px; background-color: #FFFFFF; width: 80%; margin: 30px auto; padding: 50px;">
		<!-- 搜索框 -->
		<div class="inp">
			<input  style="text-indent: 5px;" type="text" placeholder="请输入机构/项目名字" v-model="keyword" />
			<button @click="search">查询</button>
		</div>
		<div v-if="num>0">
		<p class="myres">找到<span style="color:#F55724 ;">{{num}}</span>条结果</p></div>
		
		
		<!-- 机构组件 -->
		
		<div class="huioutter">
			<div class="huibox" v-for="(el,index) in huiarr" :key="index">
				<img :src="el.img" alt="">
				<span >{{el.title}}</span>
			</div>
			
		</div>
		
		
		<!-- 项目组件 -->
		<div class="goodsoutter">
			<div class="goodsbox" v-for="(el,index) in goodsarr" :key="index">
				<a class="mygoods" @click="jump(el.gid)">{{el.title}}</a>
			</div>
		</div>
	</div>


	</div>

</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				arr:[],
				keyword: '',
				// goodsarr: [],
				// huiarr:[]
			
			};
		},
		props: [],
		components: {
			"Head": () =>import("@/components/Head.vue"),
		},
		computed:{
			huiarr:function(){
				return this.$store.state.huiarr
			},
			goodsarr:function(){
				return this.$store.state.goodsarr
			},
			num:function(){
				return this.$store.state.huiarr.length
			}
		},
		methods: {
			jump(gid){
				this.$router.push(`/xiangqing?xx=${gid}`)
			},
			search() {
					var url = `http://127.0.0.1:7001/search1?keyword=${this.keyword}`
					this.$axios.get(url).then((res) => {
						// console.log(res.data)
						this.$store.commit("changehuiarr",res.data.huiarr)
						 this.$store.commit("changegoodsarr",res.data.goodsarr)
					})
			}
		}
	}
</script>

<style scoped>
	#app {
		/* width: 88%; */
		margin: 0 auto;
		background-color: #F4F4F4;
		/* height: 1000px; */
		/* padding: 20px 24px; */
	}

	.inp {
		
		width: 260px;
		height: 34px;
		/* position: absolute;
		left: 780px;
		top: 9px; */
		border: 1px solid rgb(118, 118, 118);
	}

	.inp input {
		height: 34px;
		width: 80%;
		border: none;
		border-bottom: 1px solid rgb(118, 118, 118);
		border-right: 1px solid rgb(118, 118, 118);


	}

	.inp input:focus,
	.dengluzuce:focus {
		outline: none;
	}

	.inp button {
		width: 20%;
		height: 37px;
		background-color: white;
		border: none;
		border-left: 1px solid rgb(118, 118, 118);

		border-right: 1px solid rgb(118, 118, 118);
		border-bottom: 1px solid rgb(118, 118, 118);

		color: rgb(118, 118, 118);
		outline: none;
		cursor: pointer;
		position: relative;
		top: -37px;
		left: 210px;
	}

	.tored {
		color: red;
	}

	.myres {
		font-size: 14px;
	}

	.huioutter {
		width: 100%;
		/* height: 300px; */
		/* background-color: rgb(146, 146, 196); */
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		font-size: 14px;
		overflow: hidden;
	}

	.huioutter:after {
		content: "";
		display: block;
		width: 580px;
	}

	.huibox {
		width: 271px;
		height: 62px;
		display: inline-block;
		margin-left: 10px;
		padding: 22px 0;

	}

	.huibox span {
		position: relative;
		left: 7px;
		top: 21px;
		height: 26px;
		width: 190px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.huibox img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		vertical-align: top;
	}

	.huibox :hover {
		cursor: pointer;

	}

	.goodsbox {
		margin-top: 10px;
		margin-bottom: 10px;

	}

	.mygoods:hover {
		color: chocolate;
		cursor: pointer;
	}
</style>
