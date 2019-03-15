import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
  islogin:false,
  showSizebar:false,
  isLoding:false
};
const getters = {

};
const mutations = {
  changeLogin:state => {
    state.islogin=!state.islogin;
  },
  changeSizebar:(state,bool) => {
    state.showSizebar = bool;
  },
  changeLoading:(state,bool) => {
    state.isLoding=bool;
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
