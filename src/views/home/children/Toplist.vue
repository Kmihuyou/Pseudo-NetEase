<template>
  <div>
    <!-- 推荐歌单 -->
        <TitleComponent><template #default>{{resource.uiElement.subTitle.title}}</template></TitleComponent>
    <!--  -->
        <Scroll class="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
            <div :style="{ width: `${this.resource.creatives.length*92}vw` }" class="scroll-content flex">
                <ul v-for="item in resource.creatives" :key="item.id" class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]">
                    <li class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]">
                        <div class="flex justify-between items-center h-[12vw]">
                            <div class="flex items-center">
                                <span class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]">{{item.uiElement.mainTitle.title}}</span>
                                <Icon icon="material-symbols:keyboard-arrow-right" />
                            </div>
                            <span class="dark:text-[#8e9097] text-[#939BA1]">{{item.uiElement.mainTitle.titleDesc}}</span>
                        </div>
                    </li>
                    <li v-for="(itemm,index) in item.resources" :key="itemm.id" class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                        <div class="flex">
                            <img :src="itemm.uiElement.image.imageUrl" alt="" class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5">
                            <div class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]">
                                <div class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]">{{index+1}}</div>
                                <div class="w-[40vw]">
                                    <h4 class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]">{{itemm.uiElement.mainTitle.title}}</h4>
                                    <!-- <p v-for=" items in itemm.resourceExtInfo.artists" :key="items.id" class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]">{{items.name}}</p> -->
                                </div>
                                <div class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]">
                                    <span class="text-[#FF3836]">{{itemm.uiElement.labelText.text}}</span>
                                </div>
                            </div>
                        </div>
                        

                    </li>
                </ul>
            </div>
        </Scroll>
  </div>
</template>

<script>
import scroll from '@/components/scroll/scroll.vue'
export default {
  components: { scroll },
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