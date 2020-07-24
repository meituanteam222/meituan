/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594612286671_7343';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

//输入框安全
  config.security = {
         csrf:{
           enable: false,
           ignoreJSON: true
          }
  }


//数据库配置
  config.mysql={
client:{
host:"localhost",
 port:"3306",
user:"root",
password:"123",
database:"meituan_gongyi"
}
  }

 // 上传文件
config.multipart = {
  mode: 'file'
};


// 跨域的配置
    config.cors = {
  //         origin: 'http://localhost:8080',
  origin: 'http://localhost:8080',
          allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
		credentials:true
      };

  //session 配置
  config.session = {
    key: 'EGG_SESS',  //这个key就是返回给前端的key
    maxAge: 24 * 3600 * 1000, //有效期 1 天
    httpOnly: true, //不允许js访问
    encrypt: true, //加密
  };





  return {
    ...config,
    ...userConfig,
  };
};
