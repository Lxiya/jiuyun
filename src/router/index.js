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
import jyMemberDetail from '@/components/memberDetail/jy-memberDetail'
import jyAddSuccess from '@/components/memberAdd/jy-addSuccess'
import jyChangeSuccess from '@/components/memberDetail/jy-changeSuccess'
import jyMemberSerachList from '@/components/memberSearch/jy-memberSearchList'

import jyIntegralGoodsList from '@/components/integralStore/jy-integraGoodsList'
import jyIntegralGoodsDetail from '@/components/integralGoodsDetail/jy-integralGoodsDetail'

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
      path: '/index/news/newsContent/:id',
      component: jyNewsContent
    },
    // 店铺会员模块相关页面
    {
      path: '/store/memberList/:shopCode',
      component: jyMemberList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/store/memberAdd',
      component: jyMemberAdd
    },
    {
      path: '/store/memberDetail/:id',
      component: jyMemberDetail
    },
    {
      path: '/store/memberAddSuccess',
      component: jyAddSuccess
    },
    {
      path: '/store/memberChangeSuccess',
      component: jyChangeSuccess
    },
    {
      path: '/store/memberSerachList/:shopCode/:infoId',
      component: jyMemberSerachList,
      meta: {
        keepAlive: true
      }
    },
    // 会员积分商城模块相关页面
    {
      path: '/member/integralGoodsList/:shopId',
      component: jyIntegralGoodsList
    },
    {
      path: '/member/integralGoodsDetail/:goodsId',
      component: jyIntegralGoodsDetail
    }
  ],
  linkActiveClass: 'active'
})
