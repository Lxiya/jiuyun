// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'normalize.css'
import Vant from 'vant'
import { Lazyload } from 'vant'
import VueResource from 'vue-resource'
import 'vant/lib/index.css'
import 'animate.css/animate.min.css'
import store from './store/store'

// 开发者自定义样式
import '../static/css/base.styl'
import '../static/css/input.styl'

// Vue 全局通用组件
import NavTop from '@/components/common/NavTop'
import RadiusBg from '@/components/common/RadiusBg'
import Success from '@/components/common/Success'
import MemberListItem from '@/components/common/MemberListItem'
import IntegralExchange from '@/components/common/IntegralExchange'

Vue.component('NavTop', NavTop)
Vue.component('RadiusBg', RadiusBg)
Vue.component('Success', Success)
Vue.component('MemberListItem', MemberListItem)
Vue.component('IntegralExchange', IntegralExchange)
//Vue 全局通用属性和方法
// Vue.prototype.activityPath = 'http://47.104.104.204:8080/jiuyun/#' //线上测试页面
Vue.prototype.activityPath = 'http://192.168.1.13:8080/jiuyun/#' //本地测试页面

Vue.prototype.goAppActivity = function(url, title) {
  window.shopJsImpl.getUrlJsServer(url, title)
}

Vue.use(Vant)
Vue.use(VueResource)
Vue.use(Lazyload)

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
