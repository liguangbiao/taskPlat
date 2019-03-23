<template>
  <div id="app">
    <div id="side_bar" :class="{show:this.$store.state.showSizebar}" class="side_bar">
      <span class="jiantou" @click="changeSizebar(false)"></span>
      <ul class="select">
        <li @click="go('/Login')">用户登录</li>
        <li @click="go('/userSystem/userCenter')">用户中心</li>
        <li @click="go('/shopLogin')">商家登录</li>
        <li @click="go('/shopSystem/userCenter')">商家中心</li>
      </ul>
    </div>
    <router-view id="contain"/>  <!-- @click.native="changeSizebar(false) -->
    <loading :show="$store.state.isLoding"></loading>
    <alert></alert>
  </div>
</template>

<script>
  import Loading from "vux/src/components/loading/index";
  import Alert from "vux/src/components/alert/index";
export default {
  name: 'App',
  components:{Loading,Alert},
  methods:{
    changeSizebar:function (bool) {
      this.$store.commit("changeSizebar",bool);
    },
    go:function (path) {
      this.$router.push(path);
      this.$store.commit("changeSizebar",false);
    }
  },
  mounted() {
    document.getElementById("app").style.height=window.screen.height+"px";
    document.getElementById("side_bar").style.height=window.screen.height+"px";
    if(sessionStorage.getItem("usertoken") && sessionStorage.getItem("usertoken") != "null"){
      this.$store.commit("setUser",[sessionStorage.getItem("usertoken"),sessionStorage.getItem("userid")]);
      this.$store.commit("changeUserLogin",true);
      this.axios.defaults.headers['acc-token']=this.$store.state.userInfo.token;
    }
    if(sessionStorage.getItem("shoptoken") && sessionStorage.getItem("shoptoken") != "null"){
      this.$store.commit("setShop",[sessionStorage.getItem("shoptoken"),sessionStorage.getItem("shopid")]);
      this.$store.commit("changeShopLogin",true);
      this.axios.defaults.headers['acc-token']=this.$store.state.shopInfo.token;
    }
    // if(!this.$store.state.isUserLogin){
    //   if(!sessionStorage.getItem("usertoken")){
    //     this.$router.push('/Login')
    //   }else{
    //     this.$store.commit("setUser",[sessionStorage.getItem("usertoken"),sessionStorage.getItem("userid")]);
    //     this.$store.commit("changeUserLogin",true);
    //     this.axios.defaults.headers['acc-token']=this.$store.state.userInfo.token;
    //   }
    // }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  background: #F4F4F4;
}
  body{
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
  .side_bar{
    position: absolute;
    width: 50%;
    background-color: rgb(46,119,213);
    left: -700px;
    transition: left 0.3s ease;
    z-index: 999;
    text-align: left;
    opacity: 0.9;
  }
  .show{
    left: 0px;
  }
  .jiantou{
    width: 0.3rem;
    height: 0.3rem;
    border-left: 4px solid white;
    border-top: 4px solid white;
    display: inline-block;
    transform: rotate(-45deg);
    margin-top: 0.8rem;
    margin-left: 0.45rem;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .select{
    margin-top: 1.8rem;
    text-align: center;
  }
  .select>li{
    padding: 0.38rem 0;
    font-size: 0.38rem;
    color: #ffffff;
    letter-spacing: 2px;
  }
.select>li:hover{
  background-color: rgba(255,255,255,0.25);
}
</style>
