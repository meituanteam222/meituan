'use strict';

const Controller = require('egg').Controller;

class GetserinfoController extends Controller {
	async getUserinfo() {
		// 1.先取缓存
		// this.ctx.session.userphone="15397691769"
		if(this.ctx.session.userphone){
			let result=await this.ctx.service.getUserinfo.getUserinfo(this.ctx.session.userphone);
			this.ctx.body={
				code:2000,
				info:result
				// {
				// 	"code": 2000,
				// 	"info": [
				// 		{
				// 			"userphone": "15397691769",
				// 			"pws": "yq",
				// 			"userimg": "http://localhost:7001/public/upload/a39e9e74-104b-4092-8836-6e2200542a83.jpg",
				// 			"id": 1
				// 		}
				// 	]
				// }
			}
		}else{
			this.ctx.body={
				code:4001,
				info:"未登录"
			}
		}
		
	}
}

module.exports = GetserinfoController;