<template>
  <div>
    <div class="head">
      <span class="menu" @click="changeSizebar(true)"></span>
      <p>商家注册</p>
    </div>
    <div class="wrap">
      <input placeholder="输入手机号码" type="text" class="w_input" v-model="userPhone">
      <input placeholder="输入密码" type="password" class="w_input" v-model="userPwd">
      <input placeholder="再次输入密码" type="password" class="w_input" v-model="userPwd1">
      <!--<input placeholder="输入昵称" type="text" class="w_input" v-model="userName">-->
      <div class="wrap_div">
        <label><input type="checkbox" class="state"><span>已阅读服务协议</span></label>
        <span></span>
      </div>
      <a @click="regist">注册</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Regist",
      data(){
        return {
          userName:null,
          userPhone:null,
          userPwd:null,
          userPwd1:null,
        }
      },
      methods:{
        changeSizebar:function (bool) {
          this.$store.commit("changeSizebar",bool);
        },
        regist:function () {
          this.axios({
            url:"api/v2/shopRegister",
            method:'POST',
            data:{
              account:this.userPhone,
              password :this.userPwd,
              // userName :this.userPhone,
            }
          }).then((data)=>{
            this.$vux.alert.show({
              title: "提示",
              content: data.data.msg
            });
          })
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
  .wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.4rem;
    padding:  0 0.8rem;
  }
  .w_input{
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.3rem 0.45rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    border-radius: 0.6rem;
    border: none;
  }
  .state{
    width: 0.45rem;
    height: 0.45rem;
    margin: 0;
    margin-right: 0.2rem;
  }
  .wrap_div{
    width: 100%;
    display: flex;
    margin-top: 0.4rem;
    justify-content: space-between;
    padding: 0 0.2rem;
    align-items: center;
  }
  .wrap_div>label{
    display: flex;
    align-items: center;
    color: #626262;
    font-size: 0.3rem;
  }
  .wrap_div>span{
    font-size: 0.28rem;
  }
  .wrap>a{
    margin-top: 0.7rem;
    width: 100%;
    border-radius: 0.6rem;
    padding: 0.2rem 0.45rem;
    background-color: #4B63F8;
    color: white;
    font-size: 0.4rem;
    letter-spacing: 3px;
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
</style>
