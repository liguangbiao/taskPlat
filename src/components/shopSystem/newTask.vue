<template>
    <div>
      <div class="head">
        <span class="menu" @click="changeSizebar(true)"></span>
        <p>任务发布</p>
      </div>
      <div style="overflow: hidden">
        <div class="list" v-for="item in data" v-if="item.childList.length > 0" :class="{ard:item.childList.length %3 == 2}">
          <p v-if="item.childList.length > 0">发布{{item.name}}相关</p>
          <a v-for="item1 in item.childList" v-if="item.childList.length > 0">{{item1.name}}</a>
          <!--<a class="active">咨询服务</a>-->
          <!--<a>翻译服务</a>-->
          <!--<a>电商服务</a>-->
          <!--<a>推广任务</a>-->
          <!--<a>平面设计</a>-->
          <!--<a>游戏试玩</a>-->
          <!--<a>咨询服务</a>-->
          <!--<a>翻译服务</a>-->
          <!--<a>电商服务</a>-->
          <!--<a>推广任务</a>-->
          <!--<a>平面设计</a>-->
          <!--<a>游戏试玩</a>-->
        </div>
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
            data: [
              {
                "id": "402882a7694cfbee01694cfcc9ee0000",
                "name": "微信",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": [
                  {
                    "id": "402882fc69a3adf10169a3bb6b510000",
                    "name": "微信阅读",
                    "shopScale": 0.1,
                    "userScale": 0.1,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a3c56c9a0002",
                    "name": "微信加粉",
                    "shopScale": 0.1,
                    "userScale": 0.1,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a3fc60580007",
                    "name": "微信关注",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a406b35d0008",
                    "name": "微信投票",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a4125c2d000b",
                    "name": "微信发圈",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a41cc73c000f",
                    "name": "微信注册辅助",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a41cf8060010",
                    "name": "微信解封辅助",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfcc9ee0000",
                    "childList": null
                  }
                ]
              },
              {
                "id": "402882a7694cfbee01694cfcece90001",
                "name": "抖音",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": []
              },
              {
                "id": "402882a7694cfbee01694cfd05730002",
                "name": "头条",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": [
                  {
                    "id": "402882fc69a3adf10169a4080d090009",
                    "name": "趣头条注册",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfd05730002",
                    "childList": null
                  }
                ]
              },
              {
                "id": "402882a7694cfbee01694cfd19220003",
                "name": "淘宝",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": [
                  {
                    "id": "402882fc69a3adf10169a413fb3e000c",
                    "name": "宝贝浏览",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfd19220003",
                    "childList": null
                  },
                  {
                    "id": "402882fc69a3adf10169a414cf13000d",
                    "name": "宝贝购买（刷）",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfd19220003",
                    "childList": null
                  }
                ]
              },
              {
                "id": "402882a7694cfbee01694cfd292d0004",
                "name": "京东",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": [
                  {
                    "id": "402882fc69a3adf10169a4166b31000e",
                    "name": "宝贝购买（刷）",
                    "shopScale": 0,
                    "userScale": 0,
                    "activeFlag": "1",
                    "parentId": "402882a7694cfbee01694cfd292d0004",
                    "childList": null
                  }
                ]
              },
              {
                "id": "402882fc69a3adf10169a3c33f5b0001",
                "name": "官方",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": []
              },
              {
                "id": "402882fc69a3adf10169a3e1d4990003",
                "name": "百度",
                "shopScale": 0,
                "userScale": 0,
                "activeFlag": "1",
                "parentId": "0",
                "childList": []
              },
            ]
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
  .ard{
    justify-content: space-around !important;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 3%;
    margin-top: 0.4rem;
  }
  .list>p{
    width: 100%;
    margin: 0.1rem 0rem;
    text-align: left;
    font-size: 0.32rem;
    font-weight: bold;
  }
  .list>a{
    width: 31%;
    padding: 0.3rem 0.0rem;
    box-sizing: border-box;
    background-color: white;
    margin-top: 0.2rem;
    font-size: 0.3rem;
    height: 1rem;
  }
  #contain{
    margin-bottom: 5.1rem;
  }
  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.8rem 0;
    box-shadow: 0px -5px 10px rgba(165,165,165,0.3);
    height: 2.8rem;
    background-color: white;
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
