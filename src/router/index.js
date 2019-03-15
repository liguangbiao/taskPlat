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
      path: '/shopSystem/taskCenter',
      name: '/shopSystem/taskCenter',
      component: ()=>import('@/components/shopSystem/taskCenter')
    },
    {
      path: '/shopSystem/newTask',
      name: '/shopSystem/newTask',
      component: ()=>import('@/components/shopSystem/newTask')
    }
  ]
});

