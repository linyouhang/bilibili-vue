<template>
  <div id="app">
    <Header></Header>
    <HeaderMenu></HeaderMenu>
    <transition name="fade1">
      <GameSide v-show="isShowGame" class="game-side"></GameSide>
    </transition>
    <BContent :rows="rows"></BContent>
    <BNavSide :options="options" v-on:change="isShowMask"></BNavSide>
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
  </div>
</template>

<script>
// import TopContainer from 'components/common/TopContainer.vue'
import Header from 'components/common/Header.vue'
import HeaderMenu from 'components/common/HeaderMenu.vue'
import GameSide from 'components/common/GameSide.vue'
import BContent from 'components/content/BContent.vue'
import BNavSide from 'components/nav/BNavSide'

import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Header,
    BContent,
    BNavSide,
    HeaderMenu,
    GameSide
  },
  mounted() {
    this.$store.dispatch('getContentRows')
  },
  data() {
    return {
      showMask: false,
    }
  },
  watch: {
    options() {
      console.log('options 变化了')
    },
    items() {
      console.log('items 变化了')
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows',
      'isShowGame'
    ]),
    options() {
      let options = {
        offset: 100, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    },
    showGmage(data) {
      showGame = data
    }
  }
}
</script>

<style lang="stylus">
  .fade1-enter-active, .fade1-leave-active {
    transition: all 1s ease-out;
  }
  .fade1-enter, .fade1-leave-to /* .fade1-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .game-side{
    position absolute
    top 50px
  }
  #app 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing antialiased
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
    .wnd-mask
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
</style>
