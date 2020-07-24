<template>
	<div id="twobox">
		<!-- <div class="container"> -->
			<div class="one">推荐项目</div>
			<div class="two">
				<ul class="recommend">
					<goodsbox v-for="(item,index) in arr" :key="index" :goodsObj="item" style="display: flex;width: 554px;margin-bottom: 64px;">
					</goodsbox>
				</ul>
					
					
						<!-- <div class="antbox" style="position: relative;bottom: 13px;"> -->
							
						<!-- 	<components :is="mycom"></components> -->
					</div>
				
			<!-- </div> -->

		</div>
	</div>
</template>

<script>
	// import Two from "./Two.vue"
	// import Two from "./One.vue"
	import goodsbox from "./goodsbox.vue"
	export default {
		data() {
			return {
				// mycom: One,
				arr: []
				
				
				

			}
		},
		methods: {
			    
				// Oneclick(){
				// 	this.mycom=One
				// },
				// Twoclick(){
				// 	this.mycom=Two
				// }
		},
	

	mounted() {
			var url = "http://127.0.0.1:7001/allgoods";
			this.$axios.get(url).then((res) => {
				console.log(res.data)
				this.arr = res.data
				
			})
		},
	components: {
		goodsbox
		
		// goodsbox: () => import("./goodsbox"),
		// One,Two


		}

	}
</script>

<style scoped="scoped">
	#twobox {

		/* width: 1100px; */
		/* height: 2513px; */
		
		/* position: relative; */
		margin-top: 30px;
		background-color: #FFFFFF
		
	}

/* 	.container {
		border-bottom: 30px solid #f4f4f4;
		position: relative;
		background-color: blue;
		padding-bottom: 60px;
		border-bottom: 0;
		left: 163px;
	} */

	.one {
		background-color: white;
		line-height: 20px;
		padding: 25px 24px;
		border-bottom: 1px solid #e5e5e5;
		font-size: 16px;
		font-weight: 500
	}

	.recommend {
		/* padding: 38px 24px 0; */
		/* display: -webkit-box;
		display: -ms-flexbox; */
		display: flex;
		/* -ms-flex-wrap: wrap; */
		flex-wrap: wrap;
		/* -webkit-box-pack: justify; */
		/* -ms-flex-pack: justify; */
		justify-content: space-between;
		/* font: inherit; */
		/* font-size: 100%; */
		white-space: nowrap



	}
/* 	.card {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		margin-left: 20px;
		width: 313px;
		height: 164px;
		font-size: 12px;
		color: #666;
	} */

/* 	.antbox {
	
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	} */
</style>
