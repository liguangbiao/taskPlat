<template>
  <div>
    <div class="head">
      <span class="menu" @click="changeSizebar(true)"></span>
      <p>商家登录</p>
    </div>
    <div class="wrap">
      <input placeholder="输入账号" type="text" class="w_input" v-model="userName">
      <input placeholder="输入密码" type="password" class="w_input" v-model="userPwd">
      <div class="wrap_div" id="captcha-box"></div>
      <div class="wrap_div">
        <label><input type="checkbox" class="state"><span>免责声明</span></label>
        <span>忘记密码</span>
      </div>
      <a @click="login()">登录</a>

    </div>
  </div>
</template>

<script>
    import gtInit from '../gt'
    export default {
        name: "Login",
        data(){
          return {
            userName:null,
            userPwd:null,
            msg:null,
            result:null,
          }
        },
        mounted:function () {
          this.getGeetest();
        },
        methods:{
          getGeetest:function () {
            this.axios.get("http://www.aixwl.com/gateway/getGeeTest")
              .then((data)=>{
                  window.initGeetest({
                    gt: data.data.data.gt,
                    challenge: data.data.data.challenge,
                    offline: !data.data.data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                    product: "float", // 产品形式，包括：float，popup
                    width: "100%"
                    // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
                  },(captchaObj) => {
                    captchaObj.appendTo('#captcha-box');
                    document.getElementById("captcha-box").addEventListener('DOMSubtreeModified',function () {
                      document.getElementsByClassName("geetest_radar_btn")[0].style.borderRadius=0.6+"rem";
                      document.getElementsByClassName("geetest_success_btn")[0].style.borderRadius=0.6+"rem";
                    }, false);
                    captchaObj.onSuccess(()=>{
                      this.result=captchaObj.getValidate();
                    })
                  });
                  this.msg=data.data.msg;
                })
          },
          // handler:
          login:function(){
            this.axios({
              url:'api/v2/shopLogin',
              // url:'api/v2/getGeeTestTwo',
              method:'post',
              data:{
                dataKey:this.msg,
                geetest_challenge:this.result.geetest_challenge,
                geetest_seccode:this.result.geetest_seccode,
                geetest_validate:this.result.geetest_validate,
                account:this.userName,
                password:this.userPwd,
              }
            }).then((data)=>{
              sessionStorage.setItem("shoptoken",data.data.data.token);
              sessionStorage.setItem("shopid",data.data.data.id);
              this.$store.commit("setShop",[data.data.data.token,data.data.data.id]);
              this.$store.commit("changeShopLogin",true);
              this.axios.defaults.headers['acc-token']=data.data.data.token;
              var self=this;
              this.$vux.alert.show({
                title:"提示",
                content:data.data.msg,
                onHide() {
                  self.$router.push('/shopSystem/userCenter')
                }
              })

            })
              // .then((data)=>{
              //   if(data == 1001){
              //     this.axios({
              //       url:'api/v2/userLogin',
              //       method:'post',
              //       data:{
              //         account:this.userName,
              //         password:this.userPwd,
              //       }
              //     }).then((data)=>{
              //       console.log(data);
              //       this.$vux.alert.show({
              //         title:"提示",
              //         content:data.data.msg
              //       })
              //     })
              //   }
              // })
          },
          changeSizebar:function (bool) {
            this.$store.commit("changeSizebar",bool);
          }
        },
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
  #captcha-box{
    padding: 0;
    margin-top: 0.2rem;
  }

</style>
