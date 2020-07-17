'use strict';

const Controller = require('egg').Controller;

class SetOrderController extends Controller {
  async getmoneydetail() {
    const{ctx}=this
    ctx.body= await this.ctx.service.setOrder.getmoneydetail({userphone:this.ctx.request.query.userphone,gid:this.ctx.request.query.gid})
  }
  
  async setOrder() {
    const{ctx}=this
    ctx.body= await this.ctx.service.setOrder.setOrder(this.ctx.request.query)
  }
}

module.exports = SetOrderController;
