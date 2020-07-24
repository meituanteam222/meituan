'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async search() {
    const {ctx} =this
    var sql=`select * from hui where title like "%${this.ctx.request.query.keyword}%"`
    var huiarr=await this.ctx.app.mysql.query(sql)
    var sql2=`select title from goods where title like "%${this.ctx.request.query.keyword}%"`
    var goodsarr=await this.ctx.app.mysql.query(sql2)
    
        ctx.body={
            code:2011,
            info:"查询成功",
            huiarr:huiarr,
            goodsarr:goodsarr,
            length:huiarr.length+goodsarr.length
        }
    
    
  }
}

module.exports = SearchController;
