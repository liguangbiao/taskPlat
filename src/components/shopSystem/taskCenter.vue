<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p>任务中心</p>
      </div>
      <div class="nav">
        <a><span>全部</span></a>
        <a><span>进行中</span></a>
        <a><span>已结束</span></a>
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
  .nav{
    display: flex;
    width: 100%;
    height: 1rem;
    background-color:white;
  }
  .nav>a{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .nav>a:hover{
    border-bottom: 2px solid #4B63F8;
  }
  .nav>a>span{
    display: inline-block;
    width: 100%;
    border-right: 1px solid gainsboro;
  }
  .main{
    margin: 0 0.2rem;
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
</style>
