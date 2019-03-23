<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p></p>
        <div class="info">
          <img :src="userImg">
          <!--<p>{{userName}}</p>-->
          <span>{{userPhone}}</span>
          <div>
            <!--<p>{{userIn}}<br><span>收入（元）</span></p>-->
            <p><span>余额（元）</span><br>{{userMoney}}</p>
          </div>
        </div>
      </div>
      <div class="list">
        <a><span><img src="../../assets/usera1.png">商家资金流水</span><span></span></a>
        <a><span><img src="../../assets/usera2.png">充值记录</span><span></span></a>
        <a><span><img src="../../assets/usera3.png">余额充值入口</span><span></span></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "userCenter",
      data(){
          return {
            userImg:require("../../assets/logo.png"),
            userName:"hanxinlin",
            userPhone:13750314874,
            userIn:500,
            userMoney:"4,500"
          }
      },
      methods:{
        changeSizebar:function (bool) {
          this.$store.commit("changeSizebar",bool);
        }
      },
    }
</script>

<style scoped>
  .head{
    display: flex;
    flex-wrap: wrap;
    background-image: url("../../assets/userback.png");
    background-size: contain;
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
    margin: 0.5rem 0.4rem;
  }
  .info{
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info>img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    background-color: white;
  }
  .info>p{
    margin: 0.1rem 0;
    font-size: 0.61rem;
    letter-spacing: 1px;
    padding: 0 0.2rem 0.1rem 0.2rem;
    display: inline-block;
    border-bottom: 0.5px dashed rgba(255,255,255,0.5);
  }
  .info>span{
    margin: 0.1rem;
    font-size: 0.36rem;
    letter-spacing: 0.5px;
    font-weight: lighter;
    font-family: 宋体;
  }
  .info>div{
    display: flex;
    justify-content: center;
    width: 76%;
  }
  .info>div>p{
    text-align: center;
    font-size: 0.7rem;
    width: 50%;
    margin: -0.1rem 0 0.5rem 0;
    line-height: 0.6rem;
  }
  .info>div>p>span{
    font-size: 0.3rem;
    font-weight: bold;
  }
  .list{
    margin-top: 0.2rem;
  }
  .list>a{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.4rem;
    align-items: center;
    margin-top: 2px;
    background-color: white;
  }
  .list img{
    width: 0.58rem;
    height: 0.48rem;
    margin-right: 0.2rem;
  }
  .list>a>span{
    display: flex;
    align-items: center;
    color: #4f4f4f;
  }
  .list span:last-child{
    width: 0.2rem;
    height:0.2rem;
    border-left: 2px solid gray;
    border-top: 2px solid gray;
    display: inline-block;
    transform: rotate(135deg);
  }
</style>
