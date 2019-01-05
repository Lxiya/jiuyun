import Vue from 'vue'
import Router from 'vue-router'

import jyIndex from '@/components/index/jy-index'
import jyProjectIntro from '@/components/projectIntro/jy-intro'
import jyConCatUs from '@/components/concatUs/jy-concat'
import jyJoinUs from '@/components/joinUs/jy-joinUs'
import jyNewsContent from '@/components/newsContent/jy-newsContent'
import jyNewsCenter from '@/components/newsList/jy-newsCenter'

import jyMemberList from '@/components/memberList/jy-memberList'
import jyMemberAdd from '@/components/memberAdd/jy-memberAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: jyIndex
    },
    // 首页模块相关页面
    {
      path: '/index',
      component: jyIndex
    },
    {
      path: '/index/intro',
      component: jyProjectIntro
    },
    {
      path: '/index/concat',
      component: jyConCatUs
    },
    {
      path: '/index/joinUs',
      component: jyJoinUs
    },
    {
      path: '/index/newsCenter',
      component: jyNewsCenter
    },
    {
      path: '/index/news/newsContent',
      component: jyNewsContent
    },
    // 店铺模块相关页面
    {
      path: '/store/memberList',
      component: jyMemberList
    },
    {
      path: '/store/memberAdd',
      component: jyMemberAdd
    }
  ],
  linkActiveClass: 'active'
})
