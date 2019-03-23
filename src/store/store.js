import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
  isUserLogin:false,
  isShopLogin:false,
  showSizebar:false,
  isLoding:false,
  userInfo:{
    id:null,
    token:null,
  },
  shopInfo:{
    id:null,
    token:null
  }
};
const getters = {

};
const mutations = {
  changeUserLogin:(state,bool) => {
    state.isUserLogin=bool;
  },
  changeShopLogin:(state,bool) => {
    state.isShopLogin=bool;
  },
  changeSizebar:(state,bool) => {
    state.showSizebar = bool;
  },
  changeLoading:(state,bool) => {
    state.isLoding=bool;
  },
  setUser:(state,data)=>{
    state.userInfo.id=data[1];
    state.userInfo.token=data[0];
  },
  setShop:(state,data)=>{
    state.shopInfo.id=data[1];
    state.shopInfo.token=data[0];
  }
};
const actions = {

};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
