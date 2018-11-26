<template>
  <div>
    <div class="weekend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
          title: '承载杭城的历史之地',
          desc: '饱经沧桑的地方诉述着这座城的段段衷肠'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
          title: '泡汤好去处',
          desc: '泡在氤氲的温泉中，聆听冬天脚步的声音'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
          title: '青山秀水，精致暖汤',
          desc: '天然高品质温泉，这个冬天秀美容颜首选'
        }
      ]
    }
  }
}
</script>

</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .weekend-title
    margin-top .2rem
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
