<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p>任务发布</p>
      </div>
      <div class="list">
        <a class="active">咨询服务</a>
        <a>翻译服务</a>
        <a>电商服务</a>
        <a>推广任务</a>
        <a>平面设计</a>
        <a>游戏试玩</a>
        <a>咨询服务</a>
        <a>翻译服务</a>
        <a>电商服务</a>
        <a>推广任务</a>
        <a>平面设计</a>
        <a>游戏试玩</a>
      </div>
      <div class="bottom">
        <a>发布任务</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newTask",
      data(){
          return {

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
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 3%;
    margin-top: 0.4rem;
  }
  .list>a{
    width: 31%;
    padding: 0.3rem 0.4rem;
    box-sizing: border-box;
    background-color: white;
    margin-top: 0.2rem;
    font-size: 0.3rem;
    height: 1rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.8rem 0;
    box-shadow: 0px -5px 10px rgba(165,165,165,0.3);
  }
  .bottom>a{
    width: 2.4rem;
    height: 2.4rem;
    background-color: #4B63F8;
    color: white;
    display: block;
    margin: 0 auto;
    border-radius: 1.2rem;
    line-height: 2.4rem;
    font-size: 0.36rem;
  }
  .active{
    border: 2px solid #4B63F8;
    position: relative;
  }
  .active:after{
    content: "";
    width: 0;
    height: 0;
    border-top: 0.4rem solid #4B63F8;
    border-right: 0.4rem solid transparent;
    position: absolute;
    right: 0;
    transform: rotate(180deg);
    bottom: 0;
  }
</style>
