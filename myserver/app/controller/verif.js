'use strict';
const Controller = require('egg').Controller;
class VerifController extends Controller {
    async verif() {
        const { ctx } = this;
        let data1 = await ctx.service.verif.verif()
        ctx.body = data1;
    }


}

module.exports = VerifController;