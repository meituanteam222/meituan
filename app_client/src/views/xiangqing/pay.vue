<template>
  <div id="app">
	  <Head></Head>
	  <div  style=" width: 88%; margin: 0 auto; margin-top: 30px; ">
     <span class="sy" @click="sy">首页 /</span><span class="xq" @click="xq">项目详情 /</span><span class="jk"> 我要捐款</span>
    <!-- 项目展示 -->
    <div class="probox">
        <img :src="goodobj.img" alt="" srcset="">
        <span class="title">{{goodobj.title}}</span>
        <div class="aimmoney">{{goodobj.aimmoney}}
          <p>目标金额 / 元</p>
        </div>
        <div class="havemoney">{{goodobj.havemoney}}
          <p>已筹款 / 元</p>
        </div>
        <div class="num">{{goodobj.num}}
          <p>捐款次数 / 次</p>
        </div>
    </div>
    <!-- 项目故事 -->
    <div class="prostory">
      <div class="ptitle">捐款金额</div>
      <div class="content">
        <div class="moneybox">
          <div class="one" v-for="(el,index) in btnarr" :key="index" @click="getgou(index)">
            <span>{{el.money}}元</span>
            <span class="gou" v-show="ifshow[index]"></span>
          </div>
          <!-- 自定义捐款 -->
          <div class="otherbox">
             <input type="text" class="other-input" id="other" placeholder="只接受整数" @change="othermoney($event)" @focus="cancel">
             <label for="other" class="othertext">元</label>
          </div>
        </div>
        <div class="btnbox">
          <el-button @click="submit" plain type="warning" :disabled="ifable">确认捐款</el-button>
        </div>
      </div>
    </div>
	</div>

  </div>
</template>

<script>
export default {
  name: 'pay',
  data () {
    return {
      gid:0,
      goodobj:{},
      userphone:"",
      flag:0,
      btnarr:[{money:10},{money:20},{money:30}],
      ifshow:[false,false,false],
      money:0,
      ifable:true
    };
  },
  props:[],
  components: {
	  
	  "Head": () =>import("@/components/Head.vue"),
  },
  mounted () {
	  this.userphone=window.localStorage.getItem("userphone")
	  console.log(this.$route.query.gid)
	  this.gid = this.$route.query.gid
	  
      var url=`http://127.0.0.1:7001/getmoneydetail?userphone=${this.userphone}&gid=${this.gid}`
      this.$axios.get(url).then((res)=>{
          this.goodobj=res.data
      })
  },
  methods: {
      sy(){
          this.$router.push({path:'/'})
      },
      xq(){
          this.$router.go(-1)
      },
     cancel(){
       this.money=0
       this.ifshow=[false,false,false]
       this.ifable=false;
     },
      othermoney(e){
        var re= /^[1-9]\d*$/
        if(re.test(e.target.value)){
          this.ifshow=[false,false,false]
          this.ifable=false;
          this.money=e.target.value;
        }else{
          this.money=0
          alert("输入有误，请重新输入")
        }
        

      },
      submit(){
        // console.log(this.money)
		console.log(this.userphone)
		if(!this.userphone){
			alert("请先登录")
		}else if(this.money>(this.goodobj.aimmoney-this.goodobj.havemoney)){
			alert("您捐的太多了")
		}else if(this.userphone&&this.money){
          var url=`http://127.0.0.1:7001/setOrder?userphone=${this.userphone}&gid=${this.gid}&money=${this.money}`
          this.$axios.get(url).then((res)=>{
            alert(res.data.info)
            if(res.data.code==2222){

              this.goodobj.havemoney+=Number(this.money),
              this.goodobj.num++
            }
          }).catch(error => {
            this.money=0
            alert("金额有误请重新输入");
          })
        }else if (!this.money){
            this.money=0
          alert("金额为空")
        }
        else{
          this.money=0
          alert("请先登录")
        }
        
      },
      getgou(val){
        this.ifshow=[false,false,false]
        console.log(this.ifshow)
        this.ifshow[val]=true,
        this.money=(val+1)*10,
        this.ifable=false
      }
  }
}
</script>

<style scoped>
#app{
    
    background-color: #f4f4f4;
    height: 1000px;
 
}
.sy,.xq{
    font-size: 14;
    color: #999;
}
.jq{
    color: #333;
}
.probox{
    margin-top: 20px;
    padding: 24px;
    border-bottom: 20px solid #f4f4f4;
    /* width:100%; */
    height: 150px;
    background-color: #fff;
    position: relative;
}
.title{
    position: relative;
    top:-126px;
    left: 10px;
    font-size: 24px;
    color: #333;
}
.aimmoney{
    position: absolute;
    left: 258px;
    top: 62px;
    font-size: 22px;
    color:rgb(207, 103, 43)
}
.aimmoney p,.havemoney p,.num p{
  font-size: 12px;
  color:#666
}
.havemoney{
    position: absolute;
    left: 432px;
    top: 62px;
    font-size: 22px;
     color:rgb(207, 103, 43)
}
.num{
    position: absolute;
    right: 100px;
    top: 56px;
    font-size: 22px;
    color:rgb(207, 103, 43)
}
.jieshao{
  position: relative;
  left: 300px;
  top: -70px;
}

.prostory{
  height: 800px;
  background-color:#fff;
}
.prostory .ptitle{

    padding-left: 24px;
    height: 72px;
    line-height: 72px;
    color: #333;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    font-weight: 500;

}
.content{
  padding: 24px;
}

.moneybox{
display: flex;

}
.one{
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  margin-right: 12px;
  border: 1px solid #ddd;
  position: relative;
  font-size: 14px;
}
.one .border {
  border:1px dotted red;
}
.one .gou{   
  position:absolute;
  width: 24px;
  height: 24px;   
  right:0px;
}
.gou::after{
  position: absolute;
  top: 4px;
  left: 8px;
  width: 6px;
  height: 10px;
  border-style: solid;
  border-color: rgb(207, 103, 43);
  border-width: 0 2px 2px 0;
  transform: rotateZ(45deg);
  content: "";
}
.one span,.two span,.three span{
    color:rgb(207, 103, 43) ;
}
.otherbox{
  border: 1px solid #ddd;
      width: 216px;
    height: 32px;
}
.other-input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #f55724;
}
.othertext{
  position: relative;;
  top:-30px;
  left: 196px;
  font-size: 12px;
  color: #666;
}
.btnbox{
  height: 32px;
    width: 100px;
    display: inline-block;
    margin: 29px 24px 225px 0;
}


</style>