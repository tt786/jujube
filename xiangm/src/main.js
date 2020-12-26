// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//全局使用路由模块
import VueRouter from 'vue-router'
//引入router
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
import qs from 'qs'
import BMap from 'vue-baidu-map'
 
Vue.use(ElementUI)
Vue.use(VueRouter)
 
Vue.use(BMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '03qGYz5A9dfKnjwa5tPjdLhaKp5QcWvl'
})


import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.$axios = axios;
Vue.prototype.qs=qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
