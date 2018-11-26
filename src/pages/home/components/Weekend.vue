<template>
  <div>
    <div class="weekend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of this.weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .weekend-title
    line-height  .8rem
    background-color #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 36.6%
    .item-img
      width 100%
  .item-info
    padding .15rem
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height .4rem
      color #616161
      font-size: .24rem
      ellipsis()
</style>
