const Service = require('egg').Service;
class loginregiisterService extends Service {

  async login(paramsObj) { //登录
    // console.log(paramsObj,9999999999)
    if (paramsObj.password) {//普通登录
      var sql = `select * from userinfo where userphone="${paramsObj.userphone}" and pws="${paramsObj.password}"`
      var userarr = await this.app.mysql.query(sql)

      if (userarr[0]) {
        //登录成功
        //缓存userphone
        this.ctx.session.userphone = paramsObj.userphone
        return { code: 2007, info: "登录成功" }
      } else {//登录失败
        var sql1 = `select * from userinfo where userphone="${paramsObj.userphone}"`
        var userarr1 = await this.app.mysql.query(sql1)
        //  console.log(userarr1)
        if (userarr1[0]) {
          return { code: 4027, info: "密码错误" }
        } else {
          return { code: 4028, info: "未注册" }
        }
      }
    } else if (paramsObj.verif) {//短信动态码登录
      // console.log(this.ctx.session.smsnum,444444444)
      if (paramsObj.verif == this.ctx.session.smsnum) {//动态码正确

        var sql1 = `select * from userinfo where userphone="${paramsObj.userphone}"`
        var userarr1 = await this.app.mysql.query(sql1)
        //  console.log(userarr1)
        if (userarr1[0]) { //手机号存在登录成功
          return { code: 2007, info: "登录成功" }
        } else {//手机号不存在未注册
          return { code: 4028, info: "未注册" }
        }

      } else {//动态码错误
        return { code: 4029, info: "动态码错误" }
      }

    }


  }




  async register(paramsObj) {//注册
    // console.log(paramsObj,111)
    console.log(this.ctx.session.smsnum, 999)
    if ( this.ctx.session.smsnum!= paramsObj.sms) {
      return { code: 4133, info: "验证码有问题" }
    } else { //验证码正确
  
      const sql = `select * from userinfo where userphone=${paramsObj.userphone}`
      const userarr = await this.app.mysql.query(sql);
      // console.log(userarr,666)
      if (userarr[0]) {//用户存在
        return { code: 4134, info: "该手机号已注册" }
      } else {
        const sql1 = `insert into userinfo (userphone,pws) values ("${paramsObj.userphone}","${paramsObj.password}")`;
        await this.app.mysql.query(sql1);
        //缓存userphone
        this.ctx.session.userphone = paramsObj.userphone
        return { code: 2000, info: "注册成功" }
      }
  
  
    }
  
  }
  
  
  }
  



























module.exports = loginregiisterService;