<template>
  <div class="wrap" :style="'width:'+width+'px;height:'+height+'px'">
    <img :src="arr[idx].url" alt="" :width="width+'px'" :height="height+'px'">
    <p>{{arr[idx].text}}</p>
    <div class="point-wrap">
      <div :class="index-1==idx?'point pointChecked':'point'" v-for="(index) in arr.length" :key="index" @click="changeIdx(index-1)" ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    }
	},
	data () {
		return {
			arr: [{ url: '//i0.hdslb.com/bfs/archive/6d2872d933bc61c8f6521be2d9b5595ad04760c4.jpg@880w_388h_1c_95q', text: '英雄救美，名场面在线' }, { url: 'https://i0.hdslb.com/bfs/sycp/creative_img/202011/096a3deee0a6619caa5aafb5187783e7.jpg@880w_388h_1c_95q', text: '来领教魔女的魅力吧' }, { url: '//i0.hdslb.com/bfs/archive/5acf2501846f01ec5797203c2438e70548954d3a.png@880w_388h_1c_95q', text: '《说唱新世代》总决赛幕后全记录' }, { url: '//i0.hdslb.com/bfs/archive/a73aa30354df3a511b815c74699747458e1e5df3.jpg@880w_388h_1c_95q', text: '百万情感故事征稿火热进行中' }, { url: '//i0.hdslb.com/bfs/archive/5fcf72ec8675547219cf1dad3533876ccf46c869.jpg@880w_388h_1c_95q', text: '全方位拆解，看看30多年前的电脑有多复杂' }],
			idx: 0
		}
	},
  computed: {
  },
  methods: {
		changeIdx (data) {
			this.idx = data
		}
  },
  mounted: function () {
    setInterval(() => {
			if(this.idx < this.arr.length-1){
				this.idx++
			}
			else{
				this.idx = 0
			}
		}, 3000);
  }
}
</script>

<style lang="stylus" scoped>
.wrap{
  position: relative;
  overflow: hidden;
  p{
    position: absolute;
    bottom: 10px;
    color: white;
    font-size: 14px;
  }
  .point-wrap{
    display: grid;
    grid-template-columns: repeat(5,15px);
    grid-column-gap: 5px;
    position: absolute;
    top: 220px;
    right: 10px;
    .point{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
      cursor: pointer;
    }
    .pointChecked{
      box-sizing: border-box;
      border:2px solid white;
      background-color: hsl(195, 69%, 67%);
    }
    .point:hover{
      box-sizing: border-box;
      border:2px solid white;
      background-color: hsl(195, 69%, 67%);
    }
  }
}
</style>
