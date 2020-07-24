'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/search1', controller.home.search);
  router.get('/products', controller.home.products);
  // router.post('/register', controller.home.register);
  
  
  
  //获取详细信息渲染到页面
    router.get('/allgoods', controller.home.allgoods);
  
  
  // 用户个人信息页
    // 获取用户订单
    router.get('/getOrder', controller.userinfo.userinfo);
    // 上传头像
    router.post('/uploadimg', controller.userinfo.userimg);
    // 显示头像
    router.get('/getuserimg', controller.userinfo.getuserimg);
  
    // getUserinfo
    router.get('/getUserinfo', controller.getUserinfo.getUserinfo);
  
  
    // 搜索详情页
    // router.get('/search', controller.search.search);
    // 付款详情getmoneydetail
    router.get('/getmoneydetail', controller.setOrder.getmoneydetail);
	
	router.get('/selectorder', controller.setOrder.selectOrder);
    // 支付
    router.get('/setOrder', controller.setOrder.setOrder);
	// 删除用户订单
	router.get('/deleorder',controller.userinfo.deleorder)



//登录注册
 router.post('/login', controller.loginregister.login); //登录

  router.post('/register', controller.loginregister.register); //注册

  router.post('/smsverif', controller.smsVerif.smsVerif); //获取短信验证码
  
  router.get('/out', controller.loginOut.loginOut); //注册

};
