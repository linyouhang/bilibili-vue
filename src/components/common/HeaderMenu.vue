/* eslint-disable vue/require-v-for-key */
<template>
  <div class="wrap">
    <div class="left">
      <ul>
        <li> <span class="icon-zhuye iconfont"></span>首页</li>
        <li>
          <img src="../../assets/images/headmenuicon1.jpg" alt="">
          动态
        </li>
        <li> <span class="icon-biaoqiankuozhan_paihang-128 iconfont"></span>排行榜</li>
        <li><img src="../../assets/images/headmenuicon2.jpg" alt="">频道</li>
      </ul>
    </div>
    <hr>
    <div class="middle">
      <ul>
        <li v-for="(item, index) in menuList" :key="index">
          {{item.content}}
          <!-- <span class="middleSpan">{{item.count}}</span> -->
        </li>
      </ul>
    </div>
    <hr>
    <div class="right">
      <ul>
        <li>专栏</li>
        <li>活动</li>
        <li>小黑屋</li>
        <li>直播</li>
        <li>课堂</li>
        <li>音乐PLUS</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: [{ content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '音乐', count: '999+' }, { content: '舞蹈', count: '999+' }, { content: '知识', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '动画', count: '999+' }, { content: '音乐', count: '999+' }, { content: '音乐', count: '999+' }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrap{
    li:hover{
      color: hsl(195, 69%, 67%);
    }
    width: 980px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .left{
      margin-top: 20px;
      ul{
        font-size 10px
        width: 158px;
        list-style:none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        li{
          display: block;
          width: 40px;
          height: 39px;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
          span{
            display: block;
            width: 30px;
            height: 30px;
            line-height 36px
            font-size 10px
            font-weight 300
            border-radius: 50%;
            background: hsl(348, 100%, 68%);
            color: white;
            margin-bottom 2px
          }
          img{
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-bottom 2px
          }
        }
      }
    }
    .middle{
      margin-top: 24px;
      ul{
        list-style:none;
        cursor: pointer;
        margin: 0 auto;
        display: grid;
        margin-left: 10px;
        grid-template-columns: repeat(10, 50px);
        grid-template-rows: repeat(2, 21px);
        li{
          font-size 12px
          span{
            font-size: 10px;
            background-color: hsl(195, 69%, 67%);
            color: white;
            border-radius: 2px;
          }
        }
      }
    }
    hr{
      width: 1px;
      height: 25px;
      margin-top: 30px;
      background-color:rgb(231, 228, 228);
      border: none;
    }

    .right{
      font-size 12px
      margin-top: 23px;
      ul{
        width: 198px;
        padding-left: 20px;
        list-style:none;
        cursor: pointer;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(2, 21px);
        li{
          span{
            font-size: 5px;
            background-color: hsl(195, 69%, 67%);
            color: white;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>
