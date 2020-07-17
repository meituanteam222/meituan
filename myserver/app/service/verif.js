const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');//引入验证码第三方模块
class verifService extends Service {
    async verif() {
        //这一步生成验证码 传入的对象里面是一些配置 create()返回一个对象
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            bacground: '#cc9966'
        });
        //这一步是把验证码的字符缓存起来
        this.ctx.session.verifText = captcha.text;//captcha.text是验证码的字符
       
        return captcha.data;  //返回验证码图片
    }

}
module.exports = verifService;