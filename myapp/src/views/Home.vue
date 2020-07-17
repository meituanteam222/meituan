<template>
	<div id="box">
		<!-- 中间展示部分 -->
		<!-- 轮播图 -->
		<Lunbo></Lunbo>
		<Displaythree></Displaythree>
		<Twoshow></Twoshow>
		
		
		
		
		<!-- 详情页---- -->
		<!-- <router-link to='/xiangqing'>点击跳转到详情</router-link> -->
		

	</div>
	
</template>

<script>
	import Lunbo from "@/views/home/Lunbo.vue"
	import Displaythree from "@/views/home/Displaythree.vue"
	
	import Twoshow from "@/views/home/Twoshow.vue"
	export default {
	  name: '',
	  data () {
	    return {
	      
	    };
	  },
	  components: {
		  Lunbo,
		  Displaythree,
		  Twoshow
	  },
	  mounted () {},
	  methods: {}
	}
</script>

<style scoped>
	
</style>
