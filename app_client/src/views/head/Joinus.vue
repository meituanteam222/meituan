<template>
	<div>
		<Head></Head>
	<div class="about">
		
		<div style="padding: 30px;">
		<div class="logo-about">
			<img style="width: 80%;"  src="../../img/aboutus.png" />
		</div>
		<div><label>平台简介</label></div>
		<div class="context">
			<p style="font-size: 12px;text-align: start;">美团公益平台由美团发起，定位于“互联网+公益”服务平台，通过创新科技为慈善组织提供均等化、精准化信息发布和募捐服务的同时，为网民搭建安全、简单、便捷的公益捐赠渠道，推动中国公益慈善事业发展，共创美好生活。2018年5月，经民政部统一遴选审核，入选第二批民政部指定慈善组织互联网公开募捐信息平台。
				年度运营报告</p>
		</div>
		<div><label>年度运营报告</label></div>
		<div class="ti1">
			<img src="../../img/aboutus1.png" />
		
		</div>
		<div class="lianxi"><label>联系我们</label></div>
		<div style="border-bottom: 1px solid #eee;"><p style="font-size: 10px; padding-bottom: 30px;">邮箱：mtgy@meituan.com <br>
				电话：01056115219 <br>
				地址：北京市朝阳区望京东路4号 恒电大厦C座<br />
				</p>
				</div>

</div>
	</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
	
			};
		},
		components: {
			"Head": () =>import("@/components/Head.vue"),
	
		},
		mounted() {},
		methods: {}
	}






</script>
<style scoped="scopeds">
	.about{
		background-color: #FFFFFF;
		margin-top: 30px;
		height: 800px;
		/* padding: 30px; */
		width: 88%;
		margin: 0 auto;
		margin-top: 30px;
	}
	.lianxi{
		/* margin-top: 10px; */
		
	}
	.ti1{
		height: 89px;
		/* background: url(../../img/aboutus1.png) ; */
		
	}
	
	.logo-about {
		height: 62px;

		/* background: url(../../img/aboutus.png) ; */
	}

	label {
		min-width: 5em;
		margin-bottom: 20px;
		display: block;
		position: relative;
		text-align: left;
		font-weight: 500;
		height: 45px;
		border-bottom: 1px solid #eee
	}

	.context {
		height: 90px;
	}
</style>


