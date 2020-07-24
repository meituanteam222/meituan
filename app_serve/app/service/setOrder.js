'use strict';

const Service = require('egg').Service;

class SetOrderService extends Service {
  async getmoneydetail(obj) {
    var sql =`select * from goods where gid=${obj.gid}`
    var re =await this.ctx.app.mysql.query(sql)
    return re[0]
  }
  
  async selectOrder(gid) {
          var data = await this.app.mysql.query(`select * from userorder where gid=${gid}`);
          return data;
      }


	  
  async setOrder(obj) {
    //检查目标是否已达成
    var sql3=`select aimmoney from goods where gid = ${obj.gid}`
    var aim=await this.ctx.app.mysql.query(sql3)

    var re = /^[0-9]+.?[0-9]*/;
    //  更新
    if(aim[0].aimmoney!=0&&re.test(obj.money)){
      // 插入
      var sql1 =`insert into userorder (userphone,gid,money) values ("${obj.userphone}",${obj.gid},${obj.money})`
      await this.ctx.app.mysql.query(sql1)

      var sql2=`update goods set havemoney =havemoney+${obj.money} ,num=num+1 where gid = ${obj.gid}`
      await this.ctx.app.mysql.query(sql2)

      var sql4=`select aimmoney,havemoney,num from goods where gid = ${obj.gid}`
      var res=await this.ctx.app.mysql.query(sql4)
      console.log(res[0])
      var obj={
        info:"感谢您的帮助",
        code:2222,
        aimmoney:res[0].aimmoney,
        havemoney:res[0].havemoney,
        num:res[0].num
      }
    }
	// else if(!re.test(obj.money)){
    //   obj={
    //     code:4223,
    //     info:"输入金额有误，请重新输入"
    //   }
    // }
    else{
      obj={
        code:4222,
        info:"项目已结束"
      }
    }
    return obj
    
    

  }
}

module.exports = SetOrderService;
