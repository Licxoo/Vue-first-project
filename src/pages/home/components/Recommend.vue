<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/ae/4a44ca90ea23d668110dc7c8d6250178.water.jpg_710x420_b2582c79.jpg',
          title: '三潭印月',
          desc: '步入九曲平桥，在夕阳的余晖中走走停停，悠闲踱步。倾听湖水荡漾，观赏微波粼粼，世界静止了，思绪也停止了。'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/6a/38679b46488dd64748b5c1de394eaf37.water.jpg_710x420_4dc3c295.jpg',
          title: '雷锋夕照',
          desc: '夕照全村见，秋涛隔岸闻。”一座雷峰塔承载着多少美丽的传奇，一抹夕阳又为它遮上了更加神秘的面纱。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/85f048a840e906d50cde871d575d096c.jpg_710x420_a0f9e931.jpg',
          title: '断桥残雪',
          desc: '每当瑞雪初霁，断桥的石桥拱面无遮无拦，在阳光下冰雪消融，露出了斑驳的桥栏。涵洞中的白雪奕奕生光，桥面灰褐形成反差，远望去似断非断，故称断桥。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height  .8rem
    background-color #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .2rem
        background-color #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
