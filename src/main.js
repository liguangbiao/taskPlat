// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import qs from 'qs'
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin);
var instance=axios.create({
  // headers:{"acc-token": store.state.userInfo.token},
  // headers:{'Access-Control-Allow-Origin':'*',"Authorization": s},
  transformRequest: [function (data) {
    data = qs.stringify(data);
    return data;
  }],
  timeout:10000
});
// instance.defaults.headers.common['acc-token'] =sessionStorage.getItem("token");
//定义一个请求拦截器
instance.interceptors.request.use(
  config => {
    store.commit("changeLoading",true);
    return config
  },function (error) {
    store.commit("changeLoading",false);
    Vue.$vux.alert.show({
      title: "提示",
      content: "请求出错"
    });
    return Promise.reject(error)
  }
);
//定义一个响应拦截器
instance.interceptors.response.use(function(config){
  store.commit("changeLoading",false);
  // if(config.data.status.code == 1009){
  //     Vue.$vux.alert.show({
  //         title: "提示",
  //         content: "登录有效期已过！"
  //     });
  // }
  return config
},error => {
  store.commit("changeLoading",false);
  // if (err && err.response) {
  //     switch (err.response.status) {
  //         case 400:
  //             err.message = '请求错误'
  //             break
  //         default:
  //     }
  // }
  Vue.$vux.alert.show({
    title: "提示",
    content: "服务器出错"
  });
  return Promise.reject(error)
});
Vue.prototype.axios=instance;
Vue.config.productionTip = false;
// router.beforeEach(function (to,from,next) {
//   if(to.path == "/Login" || to.path == "/Regist" || to.path == "/shopLogin" || to.path == "/shopRegist" || to.path == "/test"){
//     next()
//   }else{
//     if(to.path.indexOf("userSystem") != -1){
//       sessionStorage.setItem("shoptoken",null);
//       if(!store.state.isUserLogin){
//         Vue.$vux.alert.show({
//           title: "提示",
//           content: "请先登录！",
//           onHide(){
//             next({path:"/Login"})
//           }
//         });
//       }else{
//         next()
//       }
//     }else if(to.path.indexOf("shopSystem") != -1){
//       sessionStorage.setItem("usertoken",null);
//       if(!store.state.isShopLogin){
//         Vue.$vux.alert.show({
//           title: "提示",
//           content: "请先登录！",
//           onHide(){
//             next({path:"/shopLogin"})
//           }
//         });
//       }else{
//         next()
//       }
//     }else{
//       next()
//     }
//   }
//   // if(!store.state.isUserLogin){  //判断登录状态
//   //   if(to.path == "/Login"){
//   //     next();
//   //   }else {
//   //     next({path:"/Login"})
//   //   }
//   // }else {
//   //   next()
//   // }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
