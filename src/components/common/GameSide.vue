<template>

  <div class="wrap" @mouseover="show" @mouseout="unShow">
    <div class="left">
      <div class="titilePic"><img src="../../assets/images/gameside1.jpg" alt="" class="tpic"></div>
      <div class="bodyPic">
        <div class="blockpic">
          <img src="../../assets/images/gameside2.jpg" class="pic">
          <p>公主连结</p>
        </div>
        <div class="blockpic">
          <img src="../../assets/images/gameside3.png" class="pic">
          <p>碧海蓝线</p>
        </div>
        <div class="blockpic">
          <img src="../../assets/images/gameside4.png" class="pic">
          <p>灰烬战线</p>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/images/title.png" alt="">
      <ul>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
        <li class="li">约战，凛冬轮回</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['showGame', 'unShowGame']),
    show () {
      this.showGame()
    },
    unShow() {
      this.unShowGame()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrap{
    box-shadow: 5px 0px 20px -15px gray;
    font-size: 10px;
    width: 480px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .left{
      text-align: center;
      width: 250px;
      .titilePic{
        .tpic{
          margin: 10px;
          width: 250px;
          cursor: pointer;
        }
      }
      .bodyPic{
        display: flex;
        justify-content: space-between;
        width:250px;
        margin-left: 10px;
        .blockpic:hover{
          background-color: rgb(229, 233, 239);
        }
        .pic{
          width: 70px;
          height: 70px;
          padding: 5px;
          cursor: pointer;
          border-radius: 18px;
        }
      }
    }
    .right{
      box-shadow:-10px 0px 20px -15px gray;
      margin-top: 10px;
      width: 180px;
      height: 230px;
      img{
        margin-left: -6px;
      }
      ul{
        list-style:none;
        li{
          padding-left: 13px;
          display: block;
          height: 26px;
          line-height: 26px;
          cursor: pointer;
        }
        li:hover{
          color: hsl(195, 100%, 42%);
          background-color:rgb(229, 233, 239);
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>
