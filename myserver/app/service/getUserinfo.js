'use strict';
const Service = require('egg').Service;
class GetuserinfoService extends Service {
	async getUserinfo(userphone) {

		let sql = `select * from userinfo where userphone="${userphone}" `
		let result = await this.app.mysql.query(sql)
		return result;
	}
}
module.exports = GetuserinfoService;