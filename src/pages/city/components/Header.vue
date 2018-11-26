<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    position relative
    .header-back
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      top 0
      left 0
      color #fff
</style>
