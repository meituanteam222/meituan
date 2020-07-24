'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async search() {
    const { ctx } = this;
	console.log(ctx.request.query)
    ctx.body = await this.ctx.service.home.search(this.ctx.request.query.keyword);
  }
    async products() {
      const { ctx } = this;
      ctx.body = await this.ctx.service.home.products(this.ctx.request.query);
      
    }
	  async register() {
	    const { ctx } = this;
	    ctx.body = await this.ctx.service.home.register(this.ctx.request.body);
	    
	  }
	  async allgoods() {
	      const { ctx } = this;
	     ctx.body = await this.ctx.service.home.allgoods();
	    }
}

module.exports = HomeController;
