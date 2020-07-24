<template>
	<div class="goodsbox" >
		<div style="display: flex; width: 500px;">
		<div class="picture" @click="goDetail(goodsObj.gid)">
			<img  :src="goodsObj.img" height="100%">
			</div>
			
		<div>
			<div  @click="goDetail(goodsObj.gid)"><span style="position: relative;left: 10px;color: #000000;">{{goodsObj.title}}</span></div>
			<el-progress class="jindutiao" :text-inside="true" :stroke-width="4" :percentage="goodsObj.havemoney/goodsObj.aimmoney*100|smallnum" status="warning"></el-progress>
			<span style="position:relative; display:block;left: 18px;top: 115px;font-size: 12px;color:gray;">目标金额{{goodsObj.aimmoney|pricenum}} 元</span><br>
			<span style="position:relative; display:block;left: 18px;top: 33px;font-size: 12px;">已捐款 {{goodsObj.havemoney|pricenum}}元</span>
			<div style="position: relative;display:block ;left: 215px;top: 55px;">
				<button class="but"  @click="woyaojuank(goodsObj.gid)" >我要捐款</button>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	
	export default {
		
		data() {
			return {}
		},
		components:{
			
		},
		props: ["goodsObj"],
		filters: {
					pricenum(num){
						var mynum=num.toFixed().toString();
						var reg=/\B(?=(\d{3})+$)/g;
						mynum=mynum.replace(reg,function($,$1){
							
							return $+",";
						});
						
						
						var reg1=/\./g;
						if(!reg1.test(mynum)){
							mynum=mynum+".00"
						}
		
						return mynum;
					},
					smallnum(x){
						var f = parseFloat(x);
						if(isNaN(f)){
							return;
						}
						f = Math.round(x*100)/100;
						return f;
						
					}
				
	},
	methods:{
			goDetail(gid){
				this.$router.push({path:"/xiangqing",query:{xx:gid}})
			},
			woyaojuank(gid){
				this.$router.push({path:"/pay",query:{gid:gid}})
			}
	}
	}
</script>

<style>
	*:focus{
		outline: none;
	}
	
	.goodsbox{
		/* width: 88%; */
		/* background-color: #42B983; */
	}
	a {
	  text-decoration: none;
	}
	.jindutiao{
		font-size: 2px;
		position: relative;
		left: 20px;
		top: 60px;
	}
	.picture {

		/* display: block; */
		width: 248px;
		height: 164px;
		background-color: #eaeaea;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.but{
		color: white;
		background-color: #F55724;
		border-radius: 6%;
		border: none;
		font-size: 14px;
	}
</style>
