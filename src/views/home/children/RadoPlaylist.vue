<template>
  <!-- 雷达歌单 -->
  <div>
    <!-- 标题组件 -->
    <TitleComponent><template #default>{{resource.uiElement.subTitle.title}}</template></TitleComponent>
    <!-- 歌单滑动组件 -->
    <Scroll class="w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]" ref="scroll">
        <!-- 滑动组件子级的宽根据数据长度变化 -->
        <div :style="{ width: `${this.resource.creatives.length * 36}vw` }" class=" flex pl-[2vw]" >
            <!-- 滑动内容 -->
            <div v-for="item in resource.creatives" :key="item.id" class="w-[31vw] ml-[3vw]">
              <div class="w-[31vw] h-[46vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                <img class="w-[31vw] h-[31vw] rounded-[8px] relative z-[1]" :src="item.uiElement.image.imageUrl" alt="">
                <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">{{item.uiElement.mainTitle.title}}</p>
              </div>
            </div>
        </div>

    </Scroll>
  </div>
</template>

<script>
// import Scroll from "@/components/scroll/scroll.vue";
export default {
  // components: { Scroll },
  props: {
    resource: {
      type: Object,
      required: true,
      
    },
  },
}
</script>

<style>

</style>