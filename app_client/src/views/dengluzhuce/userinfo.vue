<template>
  <div id="app">
	  <Head></Head>
	   <div  style=" width: 88%; margin: 0 auto; margin-top: 30px; ">
      <div class="memberheader">
          <div class="left">
              <!-- 头像上传组件 -->
            <div class="avatar">
                <el-upload
                class="avatar-uploader"
                action="http://127.0.0.1:7001/uploadimg"
                with-credentials 
                :data={userphone:userphone}
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar2"/>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
              <span>{{userphone}}</span>
          </div>
          <div class="right1">{{allmoney}}
              <p>累计捐款/元</p>
          </div>
          <div class="right2">{{allnum}}
              <p>捐款次数/次</p>
          </div>
      </div>
      <div class="tabs">
          <div class="tabstitle">
              <p>捐款记录</p>
           </div>
          
          <!-- 开始展示商品 -->
          <div class="tabspanel">
            <div class="replace" v-show="ifreplace">
            <img :src="replace"  >
            <p>没有捐款记录</p>
            </div>
			
              <div class="goodbox" v-for="(el,index) in goodarr" :key=index>
                  <img :src="el.img" alt="" srcset="">
                  <a>{{el.title}}</a><br/>
                  <span>目标金额:{{el.aimmoney}}</span>
                  <span>您已捐款{{resultarr[index].count}}次</span>
				  <button class="but" @click="dele(el.gid)">删除记录</button>
              </div>
          </div>
          <!-- 展示商品 结束-->
  </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      userphone:"",
      allmoney:0,
      allnum:0,
      goodarr:[],
      resultarr:[],
      imageUrl: 'https://s3.meituan.net/v1/mss_31d89955789b40b1af40224c1f884be8/collectionweb/pc/defaultAvatar.855eaa30be9cc007290b589bc2762d1e.png',
      replace:'https://s3.meituan.net/v1/mss_31d89955789b40b1af40224c1f884be8/collectionweb/pc/empty.943aab7e7caa9add812320d24af6736e.png',
      ifreplace:false
    };
  },
  props:[],
  components: {
	  "Head": () =>import("@/components/Head.vue"),
  },
  
  mounted () {
    // 获取头像
     this.userphone=window.localStorage.getItem("userphone")
      this.$axios.get(`http://127.0.0.1:7001/getuserimg`,{params: {userphone:this.userphone}},{withCredentials:true}).then((res)=>{
          if(res.data){
          this.imageUrl=res.data

          }
      })
      // 获取用户购物信息
      this.$axios.get(`http://127.0.0.1:7001/getOrder?userphone=${this.userphone}`).then((res)=>{
        //   console.log(res.data)
        if(res.data[1].length==0){
          this.ifreplace=true
          // alert("没有订单")
        }
          this.allnum=res.data[1].length
          this.allmoney=res.data[1].reduce((sum,e)=>{
              return sum+e.money
          },0)
          this.goodarr=res.data[0]
        //   console.log(this.goodarr)

            // 求单独商品捐款次数
          let result = res.data[1].reduce((obj, item) => {
            let find = obj.find(i => i.gid === item.gid);
            let _d = {
            ...item,
            count: 1
            };
            find ? find.count++ : obj.push(_d);
            return obj;
        }, [ ]);
            this.resultarr=result
        // console.log(result)
        


      })
  },
  methods: {
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
	  dele(gid){
		  var url =`http://127.0.0.1:7001/deleorder?gid=${gid}&userphone=${this.userphone}`;
		  this.$axios.get(url).then((res)=>{
			  alert(res.data.info)
			  this.$router.go(0)
		  })
	  }
	  
  }
}
</script>

<style  scoped>
#app{
    background-color: #f4f4f4;
 

}
.memberheader{
    /* margin: 0 auto; */
    /* width :1200px; */
    height: 157px;
    /* line-height :110px; */
    background-image: linear-gradient(307deg,#ff914e,#f05530);
    font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Roboto,Helvetica Neue,MIcrosoft YaHei,sans-serif;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 23px 60px;
    box-sizing: border-box;
    border-bottom: 20px solid #f4f4f4;

}
.left{
    padding-left: 0px;
    font-size: 18px;
    font-weight: 700;
    width: 600px;
    box-sizing: border-box;
    /* background-color: red; */
}
.left .avatar{ 
    
    position: relative;
    
    top: -20px;
    /* border-radius: 50px; */
    /* background-color:red; */
} 

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    /* border-radius: 6px; */
    cursor: pointer;
    position: relative;
    /* top: 9px; */
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 140px;
    text-align: center;
  }
  .avatar img{
    width: 100px;
    height: 100px;
    display: block;
    position: relative;
top:13px;
    border-radius: 50px;

  }


.left span{
    position: relative;
    right: -160px;
    top:-74px
}
.right1,.right2{
    position: relative;
    top: 15px;
}
.tabs {
    background-color: #fff;
    width: 100%;
    height:900px;
    
}
.tabstitle{
    border-bottom: 1px solid #e5e5e5;
    padding: 17px 0px;
    position: relative;
    left: 0px;
}
.tabstitle p{
    margin: 0;
    margin-left: 10px;
}
.tabstitle p:hover{
    color: #ff914e;
}
.goodbox{
    /* background-color: rgb(224, 224, 224); */
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
	position: relative;
}
.goodbox img{
 margin-top: 20px;
 margin-left: 20px;

}
.goodbox a{
    position: relative;
    left: 20px;
    bottom: 110px;
}
.goodbox span{
  
    position: relative;
    left: 260px;
    bottom: 100px;
}
.replace{
  position: relative;
  top:80px;
  left: 514px;
  font-size: 14px;
  color: #999;
}
/* 删除记录 按钮*/
.but{
	background-color: #F55724;
	color: white;
	border: none;
	width: 140px;
	height: 40px;
	position: absolute;
	right:50px;
	bottom: 28px;
	}
	*:focus {
		outline: none;
	}
</style>