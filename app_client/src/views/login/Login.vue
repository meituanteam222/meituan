<template>
<div class="contain">
 <div class="logo">
     <router-link to="/"><img src="../../assets/meituan.png" alt=""></router-link>
 </div>

 <div class="body">
 <div class="banner">
     <img src="../../assets/loginimg.jpg" alt="">
 </div>
 <div class="logininput">
  <myinput></myinput>
 </div>
</div>

<div class="bottom">
  <span>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
</div>
</div>
</template>
<script>
export default {
data() {
return {};
},
methods: {},
components: {
    "myinput":() =>  import('./LoginInput.vue'),
}
};
</script>

<style scoped>

.logo{
    width: 980px;
    margin: 40px auto 30px;
}
.logo a{
    display: block;
    overflow: hidden;
}
.logo a img{
    display: block;
    width:82px;
    height: 54px;
}
.body{
    margin: 0 auto 70px;
    width: 980px;
    display: flex;
    justify-content: space-between;
}
.bottom{
    margin: auto;
    width: 980px;
    font-size: 12px;
    font-family: initial;
    color: #999;
}
.contain{
	background-color: #FFFFFF;
}
</style>