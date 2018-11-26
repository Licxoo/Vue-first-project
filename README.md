# vue-travel-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 重点解析

```bash

#样式重置
reset.css

#解决移动端手机1像素边框问题
border.css 

#解决移动端click延迟300ms的问题  
npm install fastclick --save
import fastClick from 'fastclick'
fastClick.attach(document.body)

#安装stylus
npm install stylus --save
npm install stylus-loader --save


#stylus 引用要加~
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
	 '~@xxx'  @代表src目录


#创建别名 
webpack.base.conf.js

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles')
    }
  },

#修改完  webpack配置的时候 要重启服务

#轮播图vue-awesome-swiper

#防止图片加载缓慢宽度为0 影响布局
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%
    background-color #eee


#样式穿透 >>>  脱离scoped的限制
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
   
#ajax请求  运用axios

npm install axios --save

把静态文件放到static目录下才可以直接访问
.gitignore 不提交某些文件到仓库


#当访问/api开头路径时，将/api 替换为/static/mock

config > index.js > proxyTable

    proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },

#滚动效果
better-scroll

npm install better-scroll --save
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
