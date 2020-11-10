<template>
  <div
    class="header"
    @mousemove="moveHandel"
    @mouseover="hoverHandel"
    @mouseout="outHandel"
  >
    <div class="b-logo" style="margin: 0" >
      <a href="//www.bilibili.com" class="head-logo">
      <img src="//i0.hdslb.com/bfs/archive/622017dd4b0140432962d3ce0c6db99d77d2e937.png"
          class="logo-img"/>
      </a>
    </div>
    <div class="animated-banner">
      <div class="layer">
        <img
          src="https://i0.hdslb.com/bfs/vc/8e084d67aa18ed9c42dce043e06e16b79cbb50ef.png"
        />
      </div>
      <div class="layer peopleImg">
        <img
          src="https://i0.hdslb.com/bfs/vc/082e39ef757826401ef82da818310d42e05bc2de.png"
        />
      </div>
      <div class="layer">
        <img
          src="https://i0.hdslb.com/bfs/vc/dbd5c17c4315714de9e4ee119694d2e9efaf9639.png"
        />
      </div>
      <div class="layer">
        <img
          src="https://i0.hdslb.com/bfs/vc/cd9be0a2716adbae85fd899259381c4b2c2893c7.png"
        />
      </div>
      <div
        class="layer blurryImg"
        :style="
          'transform:translate(' +
            x +
            'px,0px);filter: blur(' +
            parseInt(x / 5) +
            'px)'
        "
      >
        <img
          src="https://i0.hdslb.com/bfs/vc/88537437a7916ecde847fa46652b44fbd3cbbb06.png"
        />
      </div>
      <div
        class="layer blurryImg"
        :style="
          'transform:translate(' +
            x +
            'px,0px);filter: blur(' +
            parseInt(x / 5) +
            'px)'
        "
      >
        <img
          src="https://i0.hdslb.com/bfs/vc/37d9a93baa55870506a6f3e6308e7a0c386b97c7.png"
        />
      </div>
    </div>
    <MiniHeader></MiniHeader>
  </div>
</template>
<script>
import MiniHeader from './MiniHeader'
export default {
  data () {
    return {
      x1: 0,
      x2: 0,
      x: 0
    }
  },
  methods: {
    hoverHandel (event) {
      this.x1 = event.screenX
    },
    moveHandel (event) {
      this.x2 = event.screenX
      this.x = (this.x2 - this.x1) / 10
    },
    outHandel (event) {
      this.x = 0
    }
  },
  components: {
    MiniHeader
  }
}
</script>
<style lang="stylus" scoped>
.header {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  .layer {
    position: absolute;
    top: 0;
  }
  .b-logo{
    position: absolute;
    width:220px;
    height: 77.5px;
    top: 110px;
    left: 490px;
    z-index: 100;
  }
  .blurryImg{
    margin-top: -25px;
  }
  .peopleImg{
    margin-top: -20px;
  }
}
</style>
