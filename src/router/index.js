import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>import('@/components/Login')
    },
    {
      path: '/test',
      name: 'test',
      component: ()=>import('@/components/test')
    },
    //用户
    {
      path: '/Login',
      name: 'Login',
      component: ()=>import('@/components/Login')
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: ()=>import('@/components/Regist')
    },

    {
      path: '/userSystem/taskCenter',
      name: '/userSystem/taskCenter',
      component: ()=>import('@/components/userSystem/taskCenter')
    },
    {
      path: '/userSystem/userCenter',
      name: '/userSystem/userCenter',
      component: ()=>import('@/components/userSystem/userCenter')
    },
    {
      path: '/userSystem/Hall',
      name: '/userSystem/Hall',
      component: ()=>import('@/components/userSystem/Hall')
    },
    {
      path: '/userSystem/bindAlipay',
      name: '/userSystem/bindAlipay',
      component: ()=>import('@/components/userSystem/bindAlipay')
    },
    //商家
    {
      path: '/shopLogin',
      name: 'shopLogin',
      component: ()=>import('@/components/shopLogin')
    },
    {
      path: '/shopRegist',
      name: 'shopRegist',
      component: ()=>import('@/components/shopRegist')
    },
    {
      path: '/shopSystem/userCenter',
      name: '/shopSystem/userCenter',
      component: ()=>import('@/components/shopSystem/userCenter')
    },
    {
      path: '/shopSystem/newTask',
      name: '/shopSystem/newTask',
      component: ()=>import('@/components/shopSystem/newTask')
    },
    {
      path: '/shopSystem/taskCenter',
      name: '/shopSystem/taskCenter',
      component: ()=>import('@/components/shopSystem/taskCenter')
    }
  ]
});

