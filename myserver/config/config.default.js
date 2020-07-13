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
database:"myshop"
}
  }

 // 上传文件
config.multipart = {
  mode: 'file'
};


// 跨域的配置
    config.cors = {
          origin: '*',
          allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
      };

  return {
    ...config,
    ...userConfig,
  };
};
