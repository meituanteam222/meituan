'use strict';
const Controller = require('egg').Controller;
class smsVerifController extends Controller {
  async smsVerif() {
    const { ctx } = this;
    await ctx.service.smsVerif.smsVerif(ctx.request.body)
    // ctx.body = "短信已发送"
  }
}
module.exports = smsVerifController;