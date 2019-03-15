<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p></p>
      </div>
      <div class="banner">
        <!--<img src="../../assets/logo.png">-->
      </div>
      <div class="contain">
        <div class="nav">
          <span class="jiantou"></span>
          <a>全部服务</a>
          <a>电商服务</a>
          <a>法律服务</a>
          <span class="jiantou" style="transform: rotate(135deg)"></span>
        </div>
        <div class="main">
          <a class="list bg" v-for="(item,key) in list">
            <span class="state" :class="{state0:item.state == 0}">{{item.state == 1?"进行中":"已结束"}}</span>
            <div class="list_head">
              <div><img :src="item.img"><p>{{item.title}}<span>{{item.date}}截止</span></p></div>
              <span>￥{{item.money}}</span>
            </div>
            <p>告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告制定广告</p>
            <!--<div class="shadow"></div>-->
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "taskCenter",
      data(){
          return {
            list:[
              {
                img:require("../../assets/logo.png"),
                title:"旅游专车海报设计",
                date:"6月29号",
                money:2000,
                centent:"广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告",
                state:1,
              },
              {
                img:require("../../assets/logo.png"),
                title:"旅游专车海报设计",
                date:"6月29号",
                money:2000,
                centent:"广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告",
                state:0,
              },
            ],
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
    background:white;
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
    border-top: 0.07rem solid gray;
    border-bottom: 0.07rem solid gray;
    background-color: gray;
    padding: 0.1rem 0;
    background-clip:content-box;
    z-index: 200;
  }
  .banner{
    width: 100%;
    height: 3.4rem;
    background:#4B63F8;
  }
  /*.banner>img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  .contain{
    width: 90%;
    margin: 0 auto;
    margin-top: -0.66rem;
  }
  .nav{
    background-color: white;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(165,165,165,0.3);
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0.42rem 0.3rem;
    color: #585858;

  }
  .nav>a{
    border-right: 1px solid rgba(165,165,165,0.53);
    padding: 0 0.3rem;
    letter-spacing: 1px;
    font-size: 0.3rem;
  }
  .nav>a:nth-child(4){
    border: none;
  }
  .jiantou{
    width: 0.14rem;
    height: 0.14rem;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    display: inline-block;
    transform: rotate(-45deg);
    margin: 0;
  }
  .list{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.3rem;
    /*box-shadow: 50px 50px 50px  rgba(165,165,165,0.19);*/
    padding: 0.4rem 0 0.26rem 0;
    position: relative;
    overflow: hidden;

  }
  .list_head{
    width: 100%;
    display: flex;
    padding: 0 0.4rem;
    text-align: left;
    align-items: center;
    justify-content: space-between;
  }
  .list_head>div{
    display: flex;
    align-items: center;
  }
  .list_head>div>img{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: bisque;
    margin-right: 0.2rem;
    flex: 0;
  }
  .list_head>div>p{
    margin: 0;
    color: black;
    font-size: 0.3rem;
  }
  .list_head>div>p>span{
    font-size: 0.2rem;
    color: rgba(250,178,94,0.98);
    display: block;
  }
  .list_head>span{
    color: red;
    font-size: 0.56rem;
    flex: 0;
  }
  .list>p{
    padding: 0 0.5rem;
    font-size: 0.28rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .state{
    width: 1.4rem;
    height: 0.4rem;
    background-color:#41AD24;
    position: absolute;
    top: 0.1rem;
    right: -0.36rem;
    transform: rotate(45deg);
    font-size: 0.1rem;
    line-height: 0.4rem;
    color: white;
  }
  .state0{
    background-color: #545454;
  }
  .bg{
    background-image:-webkit-gradient(
      linear,50% 0,0 100%,
      from(transparent),
      color-stop(.5,transparent),
      color-stop(.5,rgba(165,165,165,0.1)),
      to(rgba(165,165,165,0.1))
    ),
    -webkit-gradient(
      linear,50% 0,100% 100%,
      from(transparent),
      color-stop(.5,transparent),
      color-stop(.5,rgba(165,165,165,0.1)),
      to(rgba(165,165,165,0.1))
    );
    background-size:20px 10px;
    background-repeat:repeat-x;
    background-position:0 100%;
  }
  /*.shadow{*/
    /*width: 100%;*/
    /*height: 0.5rem;*/
    /*position: absolute;*/
    /*bottom: -0.5rem;*/
    /*box-shadow: 50px 50px 50px 20px blue;*/
    /*z-index: 500;*/
  /*}*/
</style>
