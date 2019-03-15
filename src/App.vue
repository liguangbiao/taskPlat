<template>
  <div id="app">
    <div id="side_bar" :class="{show:this.$store.state.showSizebar}" class="side_bar">
      <span class="jiantou" @click="changeSizebar(false)"></span>
      <ul class="select">
        <li @click="go('/Login')">网站首页</li>
        <li @click="go('/Regist')">任务大厅</li>
        <li>商家中心</li>
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
