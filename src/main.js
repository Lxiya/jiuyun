// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'normalize.css'
// import animated from 'animate.css'
import Vant from 'vant'
import VueResource from 'vue-resource'
import 'vant/lib/index.css'

// 自定义样式
import '../static/css/base.styl'
import '../static/css/input.styl'

// Vue 全局组件
import NavTop from '@/components/common/NavTop'
import RadiusBg from '@/components/common/RadiusBg'
import Success from '@/components/common/Success'
Vue.component('NavTop', NavTop)
Vue.component('RadiusBg', RadiusBg)
Vue.component('Success', Success)

Vue.use(Vant)
Vue.use(VueResource)

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
