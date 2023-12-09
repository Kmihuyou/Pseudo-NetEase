<template>
    <div>
        <!-- 推荐歌单 -->
        <TitleComponent><template #default>{{resource.uiElement.subTitle.title}}</template></TitleComponent>

        <!-- 歌单滑动组件 -->
        <div class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]"   ref="scroll">
            
              <div :style="{ width: `${this.lists.length * 37}vw` }" class=" flex pl-[2vw]" >
                  <!-- 循环播放轮播图 -->
                  <div class="pt-[1vw] relative">
                      <div class="w-[31vw] relative z-[1]">
                        <div class="dark:bg-[#1A1C23] w-[31vw] h-[41vw] bg-[#f3f3f3] overflow-hidden relative rounded-[8px]">
                          <!-- 轮播图 -->
                          <div class="my-swipe h-[100%] overflow-hidden relative flex van-swipe swiper-containers">
                              <!-- 图片 -->
                              <div class="van-swipe__track swiper-wrapper">
                                  <div v-for="item in lbt" :key="item.bannerId"  class="swiper-slide">
                                      <img :src="item.uiElement.image.imageUrl" alt="">
                                      <p class=" dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
                                        {{item.uiElement.mainTitle.title}}
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <!-- 轮播图 -->
                        </div>
                        <!-- <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">
                          {{item.uiElement.mainTitle.title}}
                        </p> -->
                      </div>
                  </div>
                  <!-- 滑动 -->
                  <div v-for="item in lists.slice(1)" :key="item.id" class="w-[31vw] ml-[3vw]">
                    <div class="w-[31vw] h-[46vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                      <router-link :to="{path:'/Playlists',query:{id:item.creativeId}}"  class="relative z-[10]">
                           <img class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]" :src="item.uiElement.image.imageUrl" alt="">
                      </router-link>
                      
                      <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">{{item.uiElement.mainTitle.title}}</p>
                    </div>
                    
                  </div>
                  <!-- <div class="flex" :style="{ width: `${this.lists.length * 31}vw` }">
                    <div class="w-[31vw] " v-for="item in lists" :key="item.id">
                        <img :src="item.uiElement.image.imageUrl" alt="" class="w-[31vw]">
                    </div>
                  </div> -->
              </div>

        </div>
        
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import BScroll from '@better-scroll/core'


export default {
    props: {
        resource: {
            type: Object,
            required: true,
        },
    auth:{
      type: Object,
    }
    },
    data(){
        return{
          lists:[],
          lbt:[]
        }
    },
    created(){
      this.lists = this.resource.creatives
      // console.log(this.resource);
      this.lbt = this.resource.creatives[0].resources

      // console.log(this.auth);
      console.log(this.resource);

    },
    mounted() {
      this.init()

      // console.log(this.resource);
      // this.lists = this.resource.creatives
      // console.log(this.lists);

      // const {creatives:[{resources:{uiElement:{image,mainTitle:{title:mainTitle}}}}],uiElement:{subTitle:{title:subTitle}}} = this.resource
      // console.log(this.resource);
      // this.lists =  this.resource.creatives[0].uiElement.image.imageUrl
      // this.lists =  this.resource.creatives[0].resources
      // console.log(this.lists);

       //解决点击失效问题
            // const options = {
            //     click:true,
            //     tap:true,
            // }
            // this.scroll = new Bscroll(this.$refs.wrapper,options)
      
    },
    beforeDestroy() {
      // this.bs.destroy()销毁函数
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          click:true,
          tap:true,
          scrollX: true,
          probeType: 3 // listening scroll event
        })
      }
    },
    updated (){
        new Swiper ('.swiper-containers', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,//自动切换
        })
        
    },
}
</script>

<style>

</style>