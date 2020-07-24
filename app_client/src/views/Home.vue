<template>
	<div>
		<Head></Head>
		<!-- 中间展示部分 -->
		<!-- 轮播图 -->
		<div  id="box">
		<Lunbo></Lunbo>
		<Displaythree></Displaythree>
		<Twoshow></Twoshow>
</div>

	</div>

</template>

<script>
	import Lunbo from "@/views/home/Lunbo.vue"
	import Displaythree from "@/views/home/Displaythree.vue"

	import Twoshow from "@/views/home/Twoshow.vue"
	// import Head from "../components/Head.vue"
	export default {
		name: '',
		data() {
			return {

			};
		},
		components: {
			Lunbo,
			Displaythree,
			Twoshow,
			"Head": () =>import("../components/Head.vue"),

		},
		mounted() {},
		methods: {}
	}
</script>

<style scoped>
#box{
	
	width: 88%;
	margin: 0 auto;
	margin-top: 30px;
}
</style>
