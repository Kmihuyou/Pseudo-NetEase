<template>
  <!-- 列表详情组件 -->
  <div class="dark:bg-[#1a1c23] bg-[#f1f1f1]">
    <!-- 滑动 -->
    <div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[20vw]" ref="scroll">
      <!-- 内容 -->
      <div class="flex w-[190vw] mx-auto justify-between flex-nowrap h-[20vw] scroll-content relative" >
          <div v-for="(item,index) in lists" :key="index" class=" scroll-item flex items-center justify-center flex-wrap">
            <img :src="item.uiElement.image.imageUrl" class="red-image" alt="">
            <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">{{item.uiElement.mainTitle.title}}</p>
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import BScroll from '@better-scroll/core'
import {getHomePageData} from "@/service"
export default {
    data(){
        return{
          lists:[],
        }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      // this.bs.destroy()销毁函数
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          probeType: 3 // listening scroll event
        })
      }
    },
    async created(){
        const [err, res] = await getHomePageData({
            type: 0,
        });
        if (err) return alert(err);
        const {data:{data:{blocks:[,{creatives:[{resources}]}]}}} = res
        // console.log(resources);
        this.lists = resources;
        // console.log(res);
    }
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  li{
    color: 
  }
</style>