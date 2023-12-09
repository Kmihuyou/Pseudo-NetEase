<template>
  <!-- 相似推荐 -->
  <div>
    <!-- 标题组件 -->
    <TitleComponent><template #default>{{resource.uiElement.subTitle.title}}</template></TitleComponent>
    <!-- 滑动组件 -->
    <Scroll class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
      <!-- 滑动组件子级的宽根据数据长度变化 -->
      <div :style="{ width: `${this.resource.creatives.length*88}vw` }" class="scroll-content flex" >
        <!-- 数组循环嵌套 -->
        <ul v-for="item in resource.creatives" :key="item.id" class="w-[88vw] scroll-item pb-[3.8vw]">
          <!-- 双重循环 -->
          <li v-for="itemn in item.resources" :key="itemn.id" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
            <div class="flex">
              <img :src="itemn.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
              <div class="flex-1 pt-[2.85vw] ml-[1vw]">
                <!-- 文字可能为undefined 找不到对应的数据就不渲染 -->
                <template v-if="itemn.uiElement.mainTitle !=undefined ">
                       <h4 class="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]">{{itemn.uiElement.mainTitle.title}}</h4>     
                </template>
                <template v-if="itemn.uiElement.subTitle !=undefined ">
                       <p class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]">{{itemn.uiElement.subTitle.title}}</p>     
                </template>
              </div>
            </div>
          </li>
        </ul>
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
  created() {
    // console.log(this.resource);
  },
}
</script>

<style>

</style>