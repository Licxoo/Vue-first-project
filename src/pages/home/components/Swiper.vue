<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide data-swiper-autoplay="2000" v-for="item of this.swiperListlist" :key="item.id">
      <img class="swipe-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: true,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  props: {
    swiperListlist: Array
  },
  computed: {
    showSwiper () {
      return this.swiperListlist.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%
    background-color #eee
    .swipe-img
      width 100%
</style>
