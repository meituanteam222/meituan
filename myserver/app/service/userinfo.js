'use strict';

const Service = require('egg').Service;

class UserinfoService extends Service {
  async userinfo(userphone) {
    var sql=`select * from userorder where userphone="${userphone}"`
    var orderarr=await this.ctx.app.mysql.query(sql)
    // console.log(orderarr)
    var goodarr=[]
    orderarr.map((item,index) =>{
        goodarr.push(item.gid) 
    })
    // console.log(goodarr)
    if(goodarr.length){
      var goodstring=goodarr.toString()
      console.log(goodstring)
      var sql2=`select * from goods where gid in (${goodstring})`
      var rearr=await this.ctx.app.mysql.query(sql2)
    }else{
      rearr=[]
    }
    
    return [rearr,orderarr]
  }
  async userimg(obj){
    var sql1=`UPDATE  userinfo  SET userimg ="${obj.imgurl}" where userphone="${obj.userphone}"`
    var imgarr=await this.ctx.app.mysql.query(sql1)
    if(imgarr.affectedRows){
      return true
      
    }

  }
}

module.exports = UserinfoService;
