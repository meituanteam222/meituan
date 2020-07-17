<template>
	<div class="displaythree">
		<div  class="box" v-for="(item,index) in arr" :key="index">
		
			<!-- <router-link :to="'/xiangqing?xx='+JSON.stringify(arr[index]d)"> -->
			<router-link :to="'/xiangqing?xx='+arr[index].gid">
			<img :src="item.img">
			<el-progress class="myprog" :text-inside="true" :stroke-width="4" :percentage="item.havemoney/item.aimmoney*100" status="warning"></el-progress>
			<!-- <el-progress :text-inside="true" :stroke-width="5" :percentage="item.havemoney/item.aimmoney*100" status="exception"></el-progress> -->
			<div class="inner">
				<p style="font-size: 20px;">{{item.title}}</p>
				<div  class="money">
					<div style="float: left;font-size: 12px;">目标金额：<span>{{item.aimmoney|pricenum}}</span>元</div>
					<div style="float: right;font-size: 12px;">已筹款：<span>{{item.havemoney|pricenum}}</span>元</div>
				</div>
			</div> 
			</router-link>
			
		</div>
	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				arr: []

			}
		},
		props: [""],
		mounted() {
			var url = "http://127.0.0.1:7001/products"
			this.$axios.get(url).then(res => {
				this.arr = res.data
			})


		},
		filters: {
			pricenum(num) {
				var mynum = num.toFixed().toString();
				var reg = /\B(?=(\d{3})+$)/g;
				mynum = mynum.replace(reg, function($, $1) {
					console.log($, $1)
					return $ + ",";
				});


				var reg1 = /\./g;
				if (!reg1.test(mynum)) {
					mynum = mynum + ".00"
				}

				return mynum;
			}



		}
	}
</script>

<style scoped="scoped">
	span {
		color: red;
		font-size: 12px;
	}

	.myprog {
		margin-top: -11px;
	}
	.box{
		background-color: #FFFFFF;
	}

	.displaythree {
		width: 100%;
		/* width: 1200px; */
		height: 400px;
		background-color: #f4f4f4;
		display: flex;
		/* flex-direction: row; */
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 30px;
		
	}
	
	.money{
		display: flex;
		justify-content: space-between;
		/* background-color: #42B983; */
		width: 100%;
		color: #333333;
	}
	*{
		text-decoration: none;
	}
	p {
		float: left;
		color: #333333;
	}

	.displaythree .inner {
		width: 330px;
		height: 47px;
		margin-left: 20px;
	}

	.displaythree .box {
		width: 380px;
		height: 400px;
		/* border: 1px solid red; */
		cursor: pointer;
		/* text-align: center; */
	}

	img {
		width: 380px;
		height: 286px;
	}
</style>
