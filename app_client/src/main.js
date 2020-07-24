import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';//引入组件库
import 'element-ui/lib/theme-chalk/index.css';//全局的css样式
import axios from 'axios'
// import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios

// Vue.use(VueAxios, axios)


Vue.use(ElementUI);//注册全局组件==>Vue.component("xxxx",{})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
