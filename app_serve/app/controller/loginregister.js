'use strict';
const Controller = require('egg').Controller;
class LoginregisterController extends Controller {
  async login() {//登录
    const { ctx } = this;
    let data1 = await ctx.service.loginregister.login(ctx.request.body)
    console.log(data1)
    ctx.body = data1;
    
    
  }
  async register() {//注册
    const { ctx } = this;
    let data1 = await ctx.service.loginregister.register(ctx.request.body)
    console.log(data1)
    ctx.body = data1;
  }
}




module.exports =  LoginregisterController