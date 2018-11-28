<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/f2/3ff99d92f10eda6bfc40db2f76e21b56.water.jpg_600x330_cecc7bb5.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          雷峰塔(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe625;</span>
          12
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary"  @close="handlerGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/7a42ca0c47ab0244da288aa73dfc238d.jpg_r_800x800_58214f61.jpg', 'http://img1.qunarzz.com/sight/p0/1409/19/fbbec4d3d40aa71079b7e6fb71a882bc.jpg_r_800x800_fbad4697.jpg']
    }
  },
  methods: {
    handleBanner () {
      this.showGallary = true
    },
    handlerGallary () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .5rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding .2rem
      .banner-number
        padding 0 .3rem
        line-height .4rem
        height .4rem
        border-radius .2rem
        font-size .24rem
        background rgba(0, 0, 0, .6)
        margin-top .28rem
        .banner-icon
          font-size .24rem
</style>
