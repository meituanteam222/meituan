<template>
  <div class="contain">
    <div class="regInput">
      <div>
        <span class="phone">手机号</span>
        <!--  v-on:onblur="isShow" -->
        <!-- (tipShow.phoneShow) -->
        <input type="text" v-model="obj.userphone" v-on:blur="isShow" @focus="cleanTip(2)" />
        <span class="inline-tip" v-show="tipShow.phoneShow">
          <i></i>
          <span>{{tip.phone}}</span>
        </span>
        <div class="getsms-box">
          <button class="getsms" @click="getsms" :disabled="disabled" > {{btntitle}}</button>
        </div>
      </div>

      <div>
        <span class="sms">短信动态码</span>
        <input type="text" v-model="obj.sms" v-on:blur="isShow" @focus="cleanTip(3)" />
        <!-- svg验证码-->
        <!-- <span v-html="verifImg" @click="getverif"></span> -->  
        <span class="inline-tip" v-show="tipShow.smsShow">
          <i></i>
          <span>{{tip.sms}}</span>
        </span>
      </div>
      <div>
        <span class="password">创建密码</span>
        <input type="password" v-model="obj.password" v-on:blur="isShow" @focus="cleanTip(4)" />
        <!-- <span>弱</span><span>中</span><span>强</span><br> -->
        <span class="inline-tip" v-show="tipShow.passwordShow">
          <i></i>
          <span>{{tip.password}}</span>
        </span>
      </div>
      <div>
        <span class="ensure">确认密码</span>
        <input type="password" v-model="obj.ensure" v-on:blur="isShow" @focus="cleanTip(5)" />
        <span class="inline-tip" v-show="tipShow.ensureShow">
          <i></i>
          <span>{{tip.ensure}}</span>
        </span>
      </div>
      <div class="btn-box">
        <button class="btn" v-on:click="registered">同意以下协议并注册</button>
      </div>

      <div class="term">
        <a href="https://rules-center.meituan.com/rules-detail/4" target="_blank">《美团点评用户服务协议》</a>
        <a href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团点评用户服务协议》</a>
      </div>
    </div>

    <div class="foot">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // verifImg: "",
      btntitle: "免费获取短信动态码",
      disabled: false ,
      obj: {
        userphone: "",
        sms: "",
        password: "",
        ensure: ""
      },
      tip: {
        phone: "请输入您的手机号码",
        sms: "请输入短信动态码",
        password: "请填写密码",
        ensure: "请再次输入密码"
      },
      tipShow: {
        phoneShow: false,
        smsShow: false,
        passwordShow: false,
        ensureShow: false
      }
    };
  },
  methods: {
    //svg验证码
    // getverif() {
    //   this.$axios({
    //     method: "get",
    //     url: " http://localhost:7001/verif",
    //     withCredentials: true
    //   }).then(res => {
    //     this.verifImg = res.data;
    //   });
    // },
   
   // 获取短信验证码
    getsms() {
      let phone1 = this.obj.userphone;
      if (!/^1[3456789]\d{9}$/.test(phone1)) {
        // alert("请输入正确的手机号码");
        this.tip.phone = "请输入正确的11位手机号码";
        this.tipShow.phoneShow = true;
      } else {
        this.btntitle = "动态码已发送请等候";
        this.disabled = true
        setTimeout(() => {
          this.btntitle = "免费获取短信动态码";
          this.disabled = false
        }, 6000);
        let url = "http://127.0.0.1:7001/smsverif";
        this.$axios
          .post(url, { phone: this.obj.userphone }, { withCredentials: true })
          .then(res => {
            console.log(res);
          });
      }
    },
    //注册
    registered() {
      // console.log(typeof this.obj.phone)
      //1.前端验证
      if (this.obj.userphone && this.obj.sms &&this.obj.password &&this.obj.ensure) {
        let phone1 = this.obj.userphone;
        if (!/^1[3456789]\d{9}$/.test(phone1)) {
          // alert("手机号码有误，请重填");
          this.tip.phone = "请输入正确的11位手机号码";
          this.tipShow.phoneShow = true;
        } else {
          //前端验证通过
          // alert("验证通过");
          // console.log(this.obj.password, this.obj.ensure, 111);
          this.tipShow.phoneShow = false;
          if (this.obj.password === this.obj.ensure) {
            //两次密码输入一致
             this.tipShow.passwordShow = false;
             this.tipShow.ensureShow = false;
            console.log("密码一致");
            let url = "http://127.0.0.1:7001/register";
            this.$axios
              .post(url, this.obj, {
                withCredentials: true
              })
              .then(res => {
                console.log(res.data);
                if (res.data.code == 4133) {
                  //验证码错误
                  console.log(res.data.info);
                  this.obj.sms = "";
                  this.tip.sms = "动态码错误";
                  this.tipShow.smsShow = true;
                  // this.loadverifImg(); //刷新验证码
                } else if (res.data.code == 4134) {
                  //账号已注册
                  console.log(res.data.info);
                  this.obj.userphone = "";
                  this.obj.sms = "";
                  this.obj.password = "";
                  this.obj.ensure = "";
                  this.tip.phone = "该手机号已注册,请登录";
                  this.tipShow.phoneShow = true;
                  // this.getverif();
                } else if (res.data.code == 2000) {
                  //注册成功
                  console.log(res.data.info);
                  window.localStorage.setItem("userphone", this.obj.userphone);
                  window.localStorage.setItem("password", this.obj.password);
                  window.localStorage.setItem("isLogin", true);
                  // this.$router.push("/"); //注册成功跳转首页
				  this.$router.push({path:"/",query:{userphone:this.obj.userphone}}); //注册成功跳转首页
                }
              });
          } else {//两次密码输入不一致
            
             // alert("两次密码输入不一致");
             this.tip.ensure = "两次输入的密码不一致，请重新输入";
             this.tipShow.ensureShow = true;
          }
        }
      }
    },
    // onblur
    isShow() {
      // console.log(11111);
      if (!this.obj.userphone) {
        this.tipShow.phoneShow = true;
      }
      if (!this.obj.sms) {
        this.tipShow.smsShow = true;
      }
      if (!this.obj.password) {
        this.tipShow.passwordShow = true;
      }
      if (!this.obj.ensure) {
        this.tipShow.ensureShow = true;
      }
    },
    cleanTip(arg) {
      if (arg == 2) {
        // console.log(2);
        this.tipShow.phoneShow = false;
      }
      if (arg == 3) {
        // console.log(3);
        this.tipShow.smsShow = false;
      }
      if (arg == 4) {
        // console.log(4);
        this.tipShow.passwordShow = false;
      }
      if (arg == 5) {
        // console.log(5);
        this.tipShow.ensureShow = false;
      }
    }
  },

  mounted() {
    // this.getverif();
  },
  components: {}
};
</script>

<style scoped>
	.contain{
		margin-top: 30px;
	}

input {
  width: 248px;
  height: 24px;
  font-family: inherit;
  font-weight: inherit;
  padding: 5px;
  border: 1px solid #aaa;
  line-height: 24px;
  vertical-align: top;
  margin: 8px 0 8px 0;
}
input:focus {
  outline: #fe8c00 solid 2px;
}
.phone,
.sms,
.password,
.ensure {
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-top: 16px;
  font-size: 14px;
  text-align: right;
  color: #333;
  margin-right: 8px;
}
.inline-tip {
  display: inline-block;
  margin-left: 4px;
  padding: 6px 0;
  line-height: 24px;
  font-size: 12px;
  color: #666;
  position: relative;
}
.inline-tip span {
  margin-left: 25px;
}

i {
  display: inline-block;
  width: 17px;
  height: 17px;
  margin-right: 8px;
  background-image: url(../../assets/forbid.png);
  background-size: cover;
  overflow: hidden;
  position: absolute;
  top: 50%;
  margin-top: -8.5px;
}

.getsms-box {
  position: relative;
}
.getsms {
  color: #333;
  background-color: #dedede;
  border: 1px solid #e3e3e3;
  border-bottom: 1px solid #aaa;
  font-weight: 400;
  background-size: 100%;
  background-image: linear-gradient(to bottom, #f7f7f7, #dedede);
  padding: 1px 8px 0;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 2px;
  position: relative;
  top: 0px;
  left: 109px;
}

.regInput {
  width: 980px;
  margin: 0 auto 40px;
}
.btn-box {
  position: relative;
}
.btn {
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  border-width: 0;
  box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
  background-size: 100%;
  font-size: 14px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-align: center;
  border-style: solid;
  border-radius: 2px;
  cursor: pointer;
  padding: 7px 20px 6px;
  position: relative;
  top: 0px;
  left: 109px;
}

.term {
  margin-top: 15px;
  position: relative;
}
.term a {
  color: #fe8c00;
  text-decoration: none;
  font-size: 13px;
  position: relative;
  left: 109px;
}
.foot {
  border-top: 1px solid #eee;
  padding-top: 20px;
  text-align: center;
  font-size: 12px;
  font-family: initial;
  color: #999;
}
.contain{
	background-color: #FFFFFF;
}
</style>