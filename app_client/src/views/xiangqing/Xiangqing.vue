<template>
	<div>
		
		<Head></Head>
		
		
		<div  style="height: 1300px; width: 88%; margin: 0 auto; margin-top: 30px; ">
		<!-- 查看详情 -->
		<!-- 头部 -->
		<router-link to="/"><span class="index">首页 </span></router-link>
		<span style="color: darkgray;"> / </span>
		<span> 项目详情</span>



		<!-- 第一部分 -->
		<div class="box">
			<!-- 左侧 -->
			<img :src="arr.img" />
			<!-- 右侧 -->
			<div class="righttext">
				<span style="font-weight: 400; font-size: 30px;">{{arr.title}}</span>
				<!-- 进度条 -->
				<div style="margin-top: 10px; margin-bottom: 10px;">
					<!-- <el-progress class="myprog" :text-inside="true" :stroke-width="4" :percentage="item.havemoney/item.aimmoney*100" status="warning"></el-progress> -->
					<el-progress :stroke-width="width" :percentage="arr.havemoney/arr.aimmoney*100" :color="customColor" :format="format"></el-progress>
				</div>
				<!-- 捐款数 -->
				<div class="money">
					<div>
						<p style="font-weight: 400; font-size: 20px;">{{arr.aimmoney}}</p>
						<p style="font-size:12px;">目标金额</p>
					</div>
					<div>
						<p style="font-weight: 400; font-size: 20px;">{{arr.havemoney}}</p>
						<p style="font-size:12px;">已筹款/元</p>
					</div>
					<div>
						<p style="font-weight: 400; font-size: 20px;">{{arr.num}}</p>
						<p style="font-size:12px;">捐款次数</p>
					</div>
				</div>

				<!-- 捐款按钮 -->
				<router-link :to="'/pay?gid='+arr.gid">
					<button class="woyaojuank">我要捐款</button></router-link>

			</div>
		</div>
		<!-- 第二部分 项目详情  -->
		<div class="xiangmuxq">
			<div class="title">
				<span class="span1" @click="fn1">项目详情</span>
				<span class="span2" @click="fn2">项目进展</span>
				<span class="span3" @click="fn3">发票说明</span>
				<span class="span4" @click="fn4">捐款记录</span>
			</div>

			<div class="xqs">

				<div v-if="page==1||page==''">
					<p class="xmms">项目描述:</p><br />
					<h4>壹基金联合救灾紧急响应南方多地洪灾</h4>
					汛情发生以来，壹基金壹基金联合救灾网络伙伴，从六月份以来，在广西、贵州、四川、重庆、安徽、湖北、江西等多省市响应洪灾行动，勘灾、调研、协助转移受灾百姓，帮助运送救援物资，在紧锣密鼓地应对灾害的同时，我们呼吁您的加入，壹起行动，为灾区同胞提供救灾温暖箱、粮油包以及壹基金温暖包（夏季适用）等生活应急品，一起帮助南方受灾群众共渡难关。
					<br>
					<img :src="arr.img" />
					<br><br><br><br><br><br>
					暴雨无情，它冲毁家园，毁掉作物
					<br>
					但是它无法击垮的是人与人之间的爱
					<br>
					当家园遭到的破坏的时候
					<br>
					勇敢又坚韧的人们，需要大家伸出援手
					<br>
					给他们生活物资
					<br>
					让他们满足基本的卫生需求，让炊烟重新燃起
					<br>
					让孩子在灾害里，不要害怕，得到关怀

				</div>
				<div v-if="page==2">
					暂无数据
				</div>
				<div v-if="page==3">
					如果你的捐款额度超过100元(基于票据以及寄送成本考虑)，您可发送您的相关信息(捐赠人支付成功截图、QQ号、真实姓名、收件地址、联系电话等)至idonation@onefoundation.cn或壹基金微信服务号:
					OF-Family，也可以致电4006902700。我们预计在收到捐款开票申请的25个工作日內开具捐赠收据并邮寄出，再次感谢您的爱心捐赠。
				</div>
				<div v-if="page==4">
					<ul >
							<Fourbox v-for="(item,index) in arr1" :key="index":orderObj="item"></Fourbox>
					</ul>
				</div>
			</div>
		</div>

</div>



	</div>
</template>

<script>
	import Fourbox from "./Fourbox.vue"
	export default {
		name: '',
		data() {
			return {
				width: 3,
				customColor: "#F55724",
				page: '',
				arr: {},
				gid: 0,
				usephone: '',
				arr1:{}
			};
		},
		components: {
			"Head": () =>import("@/components/Head.vue"),Fourbox
		},
		mounted(){
			this.usephone=window.localStorage.getItem("userphone")
			this.gid = this.$route.query.xx
			var url = `http://127.0.0.1:7001/getmoneydetail?userphone=${this.userphone}&gid=${this.gid}`
			this.$axios.get(url).then((res) => {
				this.arr = res.data
				// console.log(this.arr)
			})
			
			var url = `http://127.0.0.1:7001/selectorder?gid=${this.gid}`;
			this.$axios.get(url).then((res) => {
				console.log(res.data)
				this.arr1 = res.data
			
			})
			


			// this.arr = JSON.parse(this.$route.query.xx)
			// console.log(this.arr.title)
		},
		methods: {
			format(percentage) {
				return percentage === 100 ? '满' : `${parseInt(percentage)}%`;
			},
			fn1() {
				document.querySelector('.span1').style.color = '#F55724'
				document.querySelector('.span1').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('.span2').style.color = 'black'
				document.querySelector('.span3').style.color = 'black'
				document.querySelector('.span4').style.color = 'black'
				document.querySelector('.span2').style.borderBottom = ' none'
				document.querySelector('.span3').style.borderBottom = ' none'
				document.querySelector('.span4').style.borderBottom = ' none'
				this.page = 1
				// console.log(this.gid)

			},
			fn2() {
				document.querySelector('.span2').style.color = '#F55724'
				document.querySelector('.span2').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('.span1').style.color = 'black'
				document.querySelector('.span3').style.color = 'black'
				document.querySelector('.span4').style.color = 'black'
				document.querySelector('.span1').style.borderBottom = ' none'
				document.querySelector('.span3').style.borderBottom = ' none'
				document.querySelector('.span4').style.borderBottom = ' none'
				this.page = 2
			},
			fn3() {
				document.querySelector('.span3').style.color = '#F55724'
				document.querySelector('.span3').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('.span1').style.color = 'black'
				document.querySelector('.span2').style.color = 'black'
				document.querySelector('.span4').style.color = 'black'
				document.querySelector('.span2').style.borderBottom = ' none'
				document.querySelector('.span1').style.borderBottom = ' none'
				document.querySelector('.span4').style.borderBottom = ' none'
				this.page = 3
			},
			fn4() {
				document.querySelector('.span4').style.color = '#F55724'
				document.querySelector('.span4').style.borderBottom = ' 2px solid #F55724'
				document.querySelector('.span1').style.color = 'black'
				document.querySelector('.span2').style.color = 'black'
				document.querySelector('.span3').style.color = 'black'
				document.querySelector('.span2').style.borderBottom = ' none'
				document.querySelector('.span3').style.borderBottom = ' none'
				document.querySelector('.span1').style.borderBottom = ' none'
				this.page = 4
			}

		}
	}
</script>

<style scoped="scoped">
	*:focus {
		outline: none;
	}

	.box {
		height: 340px;
		background-color: #FFFFFF;
		margin-top: 20px;
		display: flex;
	}

	.box img {
		width: 300px;
		height: 260px;
		margin-left: 30px;
		margin-top: 30px;


	}

	.righttext {
		margin-left: 30px;
		margin-top: 30px;
		width: 800px;
		height: 220px;
	}

	QWK .index {
		color: darkgray;
	}

	a {
		text-decoration: none;
	}

	.xq {
		background-color: #FFFFFF;

	}

	.money {
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between
	}

	.money div {
		height: 80px;
		width: 160px;

	}

	.woyaojuank {
		background-color: #F55724;
		color: white;
		border: none;
		width: 140px;
		height: 40px;
		margin-top: 40px;
	}

	/* 详情介绍 */
	.xiangmuxq {
		margin-top: 30px;
		background-color: #FFFFFF;
		border-top: #A9A9A9;
		border-bottom: #A9A9A9;

	}

	.title {
		height: 50px;
		display: flex;
		justify-content: space-around;
		font-size: 16px;
		text-align: center;
		line-height: 50px;

		border-bottom: 1px solid #A9A9A9;
	}

	.xmms {
		border-left: 5px solid #F55724;
		padding-left: 5px;
		font-weight: 600;
	}

	.xqs {
		background-color: #FFFFFF;
		padding: 20px;
	}
</style>
