<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p>绑定支付宝</p>
      </div>
      <div class="wrap">
        <input placeholder="请输入支付宝账号" type="text" class="w_input" v-model="user">
        <input placeholder="请输入支付宝姓名" type="text" class="w_input" v-model="username">
        <a @click="goBind()">确认绑定</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bindAlipay",
      data(){
          return {
            user:null,
            username:null,
          }
      },
      methods:{
        changeSizebar:function (bool) {
          this.$store.commit("changeSizebar",bool);
        }
      }
    }
</script>

<style scoped>
  .head{
    background:#4B63F8;
    height: 1.32rem;
    display: flex;
    align-items: center;
    padding: 0 0.4rem;
  }
  .head>p{
    width: 100%;
    text-align: center;
    margin-left: -0.45rem;
    color: white;
    font-size: 0.4rem;
  }
  .menu{
    width: 0.45rem;
    height: 0.07rem;
    border-top: 0.07rem solid white;
    border-bottom: 0.07rem solid white;
    background-color: white;
    padding: 0.1rem 0;
    background-clip:content-box;
    z-index: 200;
  }
  .wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.6rem;
    padding:  0 0.8rem;
  }
  .w_input{
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem 0.45rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    border-radius: 0.1rem;
    border: none;
  }
  .wrap>a{
    margin-top: 0.7rem;
    width: 100%;
    border-radius: 0.1rem;
    padding: 0.3rem 0.45rem;
    background-color: #4B63F8;
    color: white;
    font-size: 0.4rem;
    letter-spacing: 3px;
  }
</style>
