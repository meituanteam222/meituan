<template>
  <div class="contain">
    <div class="reminder"  v-show="reminderObj.isShow">
        <i></i>
       <span>{{this.reminderObj.remind}}</span>
    </div>

    <!--账号密码登录  -->
    <div v-show ="logintype.normal">
    <div class="login-type" >
      <span>账号登录</span>
      <a @click="changeType">手机动态码登录</a>
    </div>
    <div class="login-input" >
    <input type="text"  v-model="userphone" placeholder="+86 > 手机号"   style=" text-indent:20px;" @focus="change">
    <input type="password"  v-model="password" placeholder="密码" style=" text-indent:20px;" @focus="change">
    <div class="forget"><a href="#">忘记密码?</a></div>
    <button @click="login">登录</button>
    <div class="signup-guide" >
        <span>还没有账号？</span>      
        <a @click="register" >免费注册</a>  
    </div>
    </div>
    </div>

    <!-- 手机验证码登录 -->
    <div v-show ="logintype.phone">
        <div class="login-type">
      <span>账号登录</span>
      <a @click="changeType" >普通方式登录</a>
    </div>
    <div class="login-input" >
    <input type="text"  v-model="userphone" placeholder="+86 > 手机号"   style=" text-indent:20px;" @focus="change">
    <div style="position=relative;"> 
    <input type="text"  v-model="verif" placeholder="动态码" style=" text-indent:20px;" @focus="change">
    <span class="getverif" @click="getsmsverif">{{title}}</span>
    </div>
    <button @click="login">登录</button>
    <div class="signup-guide" >
        <span>还没有账号？</span>      
        <a @click="register" >免费注册</a>  
    </div>
    </div>
    </div>

    <div class="other">
        <div style="width:60px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;display:inline-block;"></div>
        <span>用合作网站账号登录</span>
        <div style="width:60px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;display:inline-block;"></div>
     <div class="oAuth">
         <a class="tencent"></a>
         <a class="sina"></a>
     </div>
    
    </div>
  
  
  </div>
</template>
<script>
export default {
  data() {
    return {
        logintype:{
            normal:true,
            phone:false 
        },
        reminderObj:{
         isShow:false,
         remind:"",
        },
        userphone:"",
        password:"",
        verif:"",
        // Isfrontvalidation:false ,
        title:"获取手机动态码"
    };
  },
  methods: {
      login(){
          if(this.logintype.normal){//普通登录
              if(!this.userphone&&!this.password){
              this.reminderObj.remind="请输入内容"
              this.reminderObj.isShow = true
          }
              if(this.userphone&&!this.password){
              this.reminderObj.remind="请输入密码"
              this.reminderObj.isShow = true
          }
              if(!this.userphone&&this.password){
              this.reminderObj.remind="请输入账号"
              this.reminderObj.isShow = true
          }
          }

          if(this.logintype.phone){
              if(!this.userphone&&!this.verif){
              this.reminderObj.remind="请输入内容"
              this.reminderObj.isShow = true
          }
              if(this.userphone&&!this.verif){
              this.reminderObj.remind="请输入动态码"
              this.reminderObj.isShow = true
          }
              if(!this.userphone&&this.verif){
              this.reminderObj.remind="请输入账号"
              this.reminderObj.isShow = true
          }
          }
          
          
          
          if((this.userphone&&this.password)||(this.userphone&&this.verif)){ 
              let phone1 = this.userphone;
            if (!/^1[3456789]\d{9}$/.test(phone1)) {//正则验证
                // alert("请输入正确的手机号");
                 this.reminderObj.remind="请输入正确的手机号"
                 this.reminderObj.isShow = true
            }else {//前端正则验证通过
            //   this.Isfrontvalidation = true
              let url = "http://127.0.0.1:7001/login"
              let params = {userphone:this.userphone,password:this.password}
              if(this.logintype.phone){//验证码登录
                params = {userphone:this.userphone,verif:this.verif}
              }
              this.$axios.post(url,params,{withCredentials: true})
              .then((res)=>{
                // console.log(res.data)
                if(res.data.code==4027){//密码错误
                this.reminderObj.remind="密码或验证码错误，请重新输入"
                this.reminderObj.isShow = true
                    // console.log(res.data.info)                  
                     this.password = ""
                }else if(res.data.code ==4028){//未注册
                    this.reminderObj.remind="账号输入错误或该账号未注册"
                    this.reminderObj.isShow = true
                    //  console.log(res.data.info)
                    //  alert("未注册")
                }else if(res.data.code ==2007){//登录成功
                        // console.log(res.data.info)
                        // 前端缓存
                        window.localStorage.setItem("islogin",true)
                        window.localStorage.setItem("userphone",this.userphone)
                        this.$router.push("/") //跳转到首页
						this.$router.go(0);//刷新整个界面
						// this.$router.push(this.$route.query.path)

                }else if(res.data.code ==4029){
                    this.reminderObj.remind="动态码错误"
                    this.reminderObj.isShow = true
                }
                   
              })
            }
                          
          }
      },
      register(){
          this.$router.push("/register")
      },
      change(){
        this.reminderObj.isShow = false
        
      },
     changeType(){
         if( this.reminderObj.isShow){
             this.reminderObj.isShow = false
         }
         
     this.logintype.normal = !this.logintype.normal
     console.log(this.logintype.normal )
     this.logintype.phone  = !this.logintype.phone
     console.log(this.logintype.phone )
     },
     getsmsverif(){//获取短信验证码
         let phone1 = this.userphone;
       if(!/^1[3456789]\d{9}$/.test(phone1)){
            this.reminderObj.remind="请输入正确的手机号"
            this.reminderObj.isShow = true
            
       }else{
            this.title = "动态码已发送请等候"
            let url = "http://127.0.0.1:7001/smsverif"
             this.$axios.post(url,{phone:this.userphone},{withCredentials: true})
              .then(res=>{
                  console.log(res)
                 
              })

       }


     }
  },
  components: {}
};
</script>

<style scoped>
	*:focus{
		outline: none;
	}
	
	
a{
    text-decoration: none; 
}
.contain{
    position: relative;
    width: 270px;
    margin-top: 50px;
    margin-right: 100px;
}
.reminder{
    min-height: 18px;
    width:100%;
    padding: 10px 0 10px 0;
    margin-bottom: 10px;
    position: absolute;
    top: -46px;
    left: 0px;
    border: 1px solid #f5d8a7;
    border-radius: 2px;
    background: #fff6db;
    font-size: 12px;
}
.reminder span{
    margin-left: 30px;
}
.reminder i {
  display: inline-block;
  width: 17px;
  height: 17px;
  /* margin-right: 8px; */
  margin-left: 5px;
  background-image: url(../../assets/forbid.png);
  background-size: cover;
  overflow: hidden;
  position: absolute;
  top: 50%;
  margin-top: -8.5px;
}
.login-type span{
    color: #666;
}
.login-type a{
    cursor: pointer;
    font-size: 12px;
    color: #666;
    float:right;
}
.login-input input{
    width:100%;
    margin:8px 0;
    height: 32px;
}
.login-input input:focus{
    outline:#FE8C00 solid 2px;
    
}
.login-input .getverif{
    position: absolute;
    top: 91px;
    right: 0px;
    font-size: 12px;
    color: #666;
    cursor: pointer;
}
.login-input .forget a{
    float:right;
    color: #FE8C00;
    font-size: 12px;
}
button{
    width:100%;
    color: #222;
    background-color: #FFBD00 ;
    border-width: 0;
    padding: 7px 20px 6px;
    font-weight: bolder;
    margin-top: 15px;
}
.signup-guide span{
    font-size: 16px;
    color: #666;
}
.signup-guide a{
    color: #FE8C00;
    font-size: 14px;
}
.signup-guide a:hover{
 cursor: pointer;
}
.other{
	background-color: none !important;
    margin-top: 12px;
}
.other span{
    font-size: 14px;
    color: #666;
    margin-left:10px ;
    margin-right:10px ;

}

.other .oAuth {
margin-top: 30px;
text-align: center;
}
.other .oAuth a{
   display: inline-block;
    width: 18px;
    height: 18px;
}

.other .oAuth .tencent{
   background-image: url("../../assets/tencent.png");
   background-size: cover;   
   margin-right: 20px;
}
.other .oAuth .sina{
   background-image: url("../../assets/sina.png");
   background-size: cover; 
}


  
  
</style>

