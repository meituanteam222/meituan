<template>
  <div class="contain">
    <div class="header">
      <div class="left">
        <img @click="tohome" src="../../assets/meituan1.png" alt />
      </div>

      <div class="right">
        <span class="tip">已有美团账号</span>
        <a class="btn" @click="tologin">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tohome() {
      this.$router.push("/");
    },
    tologin(){
      this.$router.push("/login")
    }

  },
  components: {}
};
</script>

<style scoped>
.contain {
  border-bottom: 2px solid #d8d8d8;
  height: 61px;
  /* margin-bottom: 35px; */
  background-color: #FFFFFF;
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 980px;
  height: 100%;
  /* background-color:green; */

}

.left {
  height: 100%;
  position: relative;
  
}
.left img {
  width: 130px;
  height: 48px;
  position: absolute;
  top: 50%;
  margin-top:-24px ;
}

.right {
  height: 100%;
  display: flex;
   align-items:center;
}
.right .tip {
  color: #666;
  margin-right: 24px;
  font-size: 14px;
}
.right .btn {
  
  cursor: pointer;
  color: #222;
  text-decoration: none;
  background-color: #ffbd00;
  padding: 3px 10px;
  font-size: 12px;
  border-color: rgba(191, 105, 0, 0.15);
  -webkit-font-smoothing: initial;
  font-weight: 400;
  box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
}
</style>