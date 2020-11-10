<template>
  <div class="miniHeader-wrap">
    <div class="miniHeader">
      <div class="nimiHeader-nav">
        <a class="link">
        <i class="icon-bilibili-fill iconfont"></i>
        主站
        </a>
        <a class="link">
        番剧
        </a>
        <a class="link" @mouseover="showYX" @mouseout="unShowYX">
        游戏中心
        </a>
        <a class="link">
        直播
        </a>
        <a class="link">
        会员购
        </a>
        <a class="link">
        漫画
        </a>
        <a class="link">
        赛事
        </a>
        <a class="link" @mouseover="showMA" @mouseout="unShowMA">
          <span class="icon-phone iconfont"></span>
        下载APP
        </a>
        <transition name="fade">
          <img src="../../assets/images/app-download.png" class="appDownload" v-show="isShow" @mouseover="showMA" @mouseout="unShowMA">
        </transition>
      </div>
      <div class="search">
        <input type="text" placeholder="周深独家纪录片上线！">
        <button><span class="icon-search iconfont"></span></button>
      </div>
      <div class="header-right">
        <div class="login">
          <img src="../../assets/images/akari.jpg">
          <a class="link">登入</a>
          <a class="link">注册</a>
        </div>
        <button class="tougao" @mouseover="show3" @mouseout="unshow3">投稿</button>
        <transition>
          <PostMaterial v-show="isTougao" @mouseover.native="show3" @mouseout.native="unshow3"></PostMaterial>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import PostMaterial from './PostMaterial'
export default {
  data () {
    return {
      isShow: false,
      isTougao: false
    }
  },
  components: {
    PostMaterial
  },
  methods: {
    showYX () {
      this.showGame()
    },
    unShowYX () {
      this.unShowGame()
    },
    showMA () {
      this.isShow = true
    },
    unShowMA () {
      this.isShow = false
    },
    show3 () {
      this.isTougao = true
    },
    show4() {
      this.isTougao = true
    },
    unshow3 (){
      this.isTougao = false
    },
    ...mapMutations(['showGame', 'unShowGame'])
  }
}
</script>
<style lang="stylus" scoped>
  .link
    color hsl(0, 0%, 100%)
    font-size 14px
    text-shadow hsla(0, 0%, 0%, 0.3) 0px 1px 1px
  .miniHeader-wrap{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 56px;
    color: hsl(0, 0%, 100%);
    font-size: 14px;
    line-height: 30px;
    .miniHeader{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 13px 24px;
      .nimiHeader-nav{
        display: flex;
        width: 434px;
        justify-content: space-between;
        .fade-enter-active, .fade-leave-active {
          transition: all 1s ease-out;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
        .appDownload{
          position: absolute;
          width: 270px;
          top: 50px;
          left: 275px;
        }
      }
      .search{
        width: 500px;
        display: flex;
        height: 36px;
        background-color: hsl(0, 0%, 100%);
        border-color: hsla(0, 0%, 100%, 0);
        border:0px solid;
        border-radius: 2px;
        color: hsl(0, 0%, 31%);
        input{
          height: 34px;
          font-size: 14px;
          border: none;
          outline:none;
          padding-left: 17px;
          width: 444px;
        }
        button{
          width: 48px;
          height: 36px;
          background-color: hsl(0, 0%, 91%);
          color: hsl(0, 0%, 31%);
          font-size: 14px;
          border: none;
          outline: none;
          cursor: pointer;
        }
        button:hover{
          color: hsl(195, 100%, 42%);
        }
      }
      .header-right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 219px;
        .login{
          display: flex;
          width: 105px;
          justify-content: space-between;
          cursor: pointer;
          img{
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
        .tougao{
          cursor: pointer;
          background-color: hsl(343, 94%, 72%);
          width: 100px;
          height: 36px;
          border: none;
          border-radius: 2px;
          color: hsl(0, 0%, 100%);
        }
      }
    }
  }
</style>
