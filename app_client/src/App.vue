<template>
  <div id="app">
	  <!-- 中间展示部分 -->
    <!-- <Head></Head> -->
	
	
	<!-- 把展示的内容用一个div包裹，固定所有子组件的宽度 -->
	 <div>
    <router-view/>
  </div>
  
 
  </div>
</template>

<script>
import Head from "./components/Head.vue"

export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {
      Head,
	 
  },
  mounted () {},
  methods: {}
}



</script>
<style scoped="scoped">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
} */
#app{
	background-color: rgb(244, 244, 244);
}
#body{
	width: 1200px;
	margin: 0 auto;
	margin-top: 20px;
}
/* *:focus{
	outline: none;
} */


</style>
