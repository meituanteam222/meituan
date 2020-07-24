'use strict';

const Controller = require('egg').Controller;
const fs = require("fs");
var path=require("path");
class UserinfoController extends Controller {
  async userinfo() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.userinfo.userinfo(this.ctx.request.query.userphone)
  }
  async userimg() {

    console.log(this.ctx.request.body.userphone)
    const { ctx } = this;
    const dest = '/public/upload/';
    const file = ctx.request.files[0];
    console.log(ctx.request.files);
    let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
    // 处理文件，比如上传到云端  或 放到指定的目录
    await fs.copyFileSync(file.filepath, to);
    fs.unlinkSync(file.filepath);
    console.log(dest);
    // 返回图片路径
    let cluster = this.app.config.cluster.listen;
     var imgurl= `http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`;
    var re = await this.ctx.service.userinfo.userimg({imgurl:imgurl,userphone:this.ctx.request.body.userphone});
    if(re){
      this.ctx.body = {code: 2008,info: "头像上传成功" ,imgurl:imgurl}
    }


}
async getuserimg() {
  console.log(this.ctx.request.query.userphone)
  var sql=`select userimg from userinfo where userphone="${this.ctx.request.query.userphone}"`
  
  var res=await this.ctx.app.mysql.query(sql)
  console.log(res)
  this.ctx.body=res[0].userimg
}

async deleorder() {
  var sql=`delete from userorder where userphone="${this.ctx.request.query.userphone}" and gid=${this.ctx.request.query.gid}`
  
  await this.ctx.app.mysql.query(sql)
 
  this.ctx.body={
	  info:"删除成功"
  }
}  
  
}

module.exports = UserinfoController;
