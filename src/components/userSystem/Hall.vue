<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p></p>
      </div>
      <div class="banner">
        <img src="../../assets/logo.png">
      </div>
      <div class="wrap">
        <div><p style="color: #4C62F6">95</p><span>当前托管总数</span></div>
        <div><p style="color: #A5A5A5">32</p><span>离线数</span></div>
        <div style="position: relative"><p style="color: #FAB25E">67</p><span>在线数</span><span class="circle">？</span></div>
      </div>
      <div class="contain">
        <a class="list" v-for="(item,key) in list">
          <span>{{key+1<10? "0"+(key+1):key+1}}</span>
          <img :src="item.img">
          <p>{{item.phone}}<br><span>{{item.username}}</span></p>
          <span>{{item.state}}</span>
          <div>
            <span>{{item.date.split(" ")[0]}}<br>{{item.date.split(" ")[1]}}</span>
            <img src="../../assets/logo.png">
          </div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Hall",
      data(){
          return {
            list:[
              {
                img:require("../../assets/logo.png"),
                phone:13750314874,
                username:"妞妞",
                state:"在线中",
                date:"03/13 22:20:55",
              },
              {
                img:require("../../assets/logo.png"),
                phone:13750314874,
                username:"妞妞",
                state:"在线中",
                date:"03/13 22:20:55",
              },
              {
                img:require("../../assets/logo.png"),
                phone:13750314874,
                username:"妞妞",
                state:"在线中",
                date:"03/13 22:20:55",
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
  .banner>img{
    width: 100%;
    height: 100%;
  }
  .wrap{
    display: flex;
    text-align: left;
    background-color: white;
    box-shadow: 1px 1px 1px rgba(134,134,134,0.2);
  }
  .wrap>div{
    width: 33.3%;
    padding: 0.4rem 0 0.4rem 0.4rem;
  }
  .wrap p{
    font-size: 0.5rem;
    font-weight: bold;
    margin: 0.1rem 0;
    padding-left: 0.1rem;
  }
  .wrap span{
    font-size: 0.28rem;
  }
  .circle{
    width: 0.4rem;
    height: 0.4rem;
    background-color: gray;
    display: block;
    position: absolute;
    top: 0.2rem;
    right: 0.4rem;
    border-radius: 0.2rem;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  .list{
    display: flex;
    align-items: center;
    padding: 0.3rem 0.1rem 0.2rem 0.1rem;
    background-color: white;
    margin-top: 0.2rem;
    box-shadow: 1px 1px 1px rgba(134,134,134,0.2);
    justify-content: space-around;
  }
  .list>span:first-child{
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    border-radius: 0.25rem;
    background-color: rgba(134,134,134,0.2);
    font-size: 0.26rem;
    line-height: 0.5rem;
  }
  .list>img{
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: antiquewhite;
    margin-left: -0.3rem;
  }
  .list img:last-child{
    width: 0.4rem;
    height: 0.4rem;
    display: block;
    margin-top: 0.28rem;
  }
  .list>p{
    text-align:left;
    font-size: 0.26rem;
    margin-left: -0.28rem;
  }
  .list>p>span{
    font-size: 0.3rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .list>span:nth-child(4){
    color: rgba(250,178,94,0.98);
    font-size: 0.26rem;
    letter-spacing: 1px;
    margin-left: 0.3rem;
  }
  .list>div{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    font-size: 0.24rem;

  }
</style>
