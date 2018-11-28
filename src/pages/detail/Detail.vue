<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import detailBanner from './components/Banner.vue'
import detailHeader from './components/Header.vue'
import detailList from './components/List.vue'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - xx销售'
                },
                {
                  title: '成人三馆联票 - xxxxxx销售'
                }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '促销票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
