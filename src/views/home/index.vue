<template>
  <!-- 整体 -->
  <div >
      <!-- 内容 -->
    <div class="bg-[#F4F4F4] pb-[12vw]"> <!-- class="bg-[#F4F4F4] pb-[12vw]" -->
      <!-- 上半部分 搜索框/轮播图 -->
      <div class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
        <!-- 搜索框 -->
        <Head></Head>
        <!-- 轮播图 -->
        <Carousel></Carousel>
      </div>
      <!-- 列表详情组件 -->
      <ListDetails></ListDetails>
      <!-- 推荐歌单 -->
      <!-- <PlayLists></PlayLists> -->
      <!-- blocks首页全部数据   block组件每一项数据 传给子组件 -->
      <Block v-for="block in blocks" :resource="block" :auth="auth" :key="block.id"></Block>
    </div>

  </div>
  
</template>

<script>
import { mapState } from "vuex";
import Block from "./children/block.vue";//导入整合的首页组件
// import { getHomePageData, getHomepageDragonBall } from "@/service";//接口
import Carousel from "@/views/home/children/Carousel.vue";//轮播图组件
import Head from "@/views/home/children/HeadSearch.vue";//搜索框组件
// import Carousel from "@/views/home/children/Carousel.vue";//轮播图组件
import ListDetails from "@/views/home/children/ListDetails.vue"//列表详情组件
// import PlayLists from "@/views/home/children/PlayLists.vue"//推荐歌单组件
export default {
    // components: {Head,Carousel,ListDetails,PlayLists,Block},
    components: {Block,Carousel,ListDetails,Head},
    computed:{...mapState(["blocks"]),...mapState(["auth"])},
    data() {
      return {
        // blocks: [],//blocks首页全部数据
        // menus: [],
      };
    },
    // 获取接口数据
  //   async created() {
  //   const [errorHomePageData, homePageData] = await getHomePageData();
  //   if (!errorHomePageData) this.blocks = homePageData.data.data.blocks;
  //   console.log(this.blocks);
  //   const [errorHomepageDragonBall, homepageDragonBall] =
  //     await getHomepageDragonBall();
  //   if (!errorHomepageDragonBall) this.menus = homepageDragonBall.data.data;
  // },
}
</script>

<style>

</style>