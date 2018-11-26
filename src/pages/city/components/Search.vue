<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名字或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    background-color $bgColor
    padding 0 .1rem
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .1rem
      color #666
      padding 0 .1rem
      box-sizing border-box
</style>
