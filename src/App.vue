<template>
  
  <div id="app" :class="{dark:isDarkMode}">
    <!-- 按项目需求写结构 -->
        
        
        <!-- 3 添加路由填充位/出口 路由匹配到的组件将渲染在这里 -->
        <router-view><!-- 路由出口 导航链接的组件渲染位置 -->
        <!-- {{this.arr[$route.params.id-1].des}} -->
          <!-- {{$route.params.id}} -->
          <!-- {{this.obj[$route.params.id]}} -->
        </router-view>

        <!-- 2 加路由链接 router-link会渲染为a标签,to渲染为href,to后的值渲染为href的值 自动加#变为hash值-->
        <BottomTab />
        <AudioPlayer />

        
  </div>


</template>

<script>
import {mapState} from "vuex"
export default {
  created(){
    this.$store.dispatch('requestHomePageData')
    this.$store.dispatch('requestHomepageDragonBall')
  },
  computed:{
    ...mapState(["isDarkMode"])
  }
}
</script>

<style>

</style>