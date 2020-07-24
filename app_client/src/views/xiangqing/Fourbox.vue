<template>

	<div>
		<img src="https://s3.meituan.net/v1/mss_31d89955789b40b1af40224c1f884be8/collectionweb/pc/defaultAvatar.855eaa30be9cc007290b589bc2762d1e.png" style="background-color: lavender;height: 30px;">
		<span style="position: relative;top: -7px;left: 10px; color:dimgray ;">{{orderObj.userphone}}</span>
		<div style="position: relative;top: -27px;left: 300px;color:dimgray">
		<span >捐出{{orderObj.money}}元</span>
		</div>
	</div>

</template>

<script>
	export default {
	
		props: ["orderObj"]
	}
</script>

<style>
</style>
