<template>
<!-- 歌单列表 -->
  <div class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
    
    <van-sticky :offset-top="57">
        <nav type="info" class="a1 h-[13vw] flex items-center justify-between bg-white px-[3.8vw]">
            <div class="flex items-center">
                <Icon icon="gridicons:play" color="red" class="text-[#ED3E20] text-[8vw] iconify iconify--heroicons-solid"/>
                <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
                <template v-if="resource.playlist">
                    <span class="text-[#8C9094] text-[2.7vw]">{{resource.playlist.trackIds.length}}</span>
                </template>
            </div>
            <div class="flex items-center">
                <Icon icon="material-symbols-light:download-sharp" color="white" class="text-[5vw] text-[#2C3034] iconify iconify--clarity" />
                <Icon icon="foundation:indent-more" class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar"/>
            </div>
        </nav>
    <!-- <van-button type="info">吸顶距离</van-button> -->
    </van-sticky>
    <!-- 列表 -->
    <template v-if="resource.playlist">
        <div v-for="(item,index) in resource.playlist.tracks" :key='item.id'>
            <div class="flex items-center h-[14vw]">
                <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{index+1}}</div>
                <div class="font-medium text-[3.6vw] w-[64vw]">
                    <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                        <span>{{item.al.name}}</span>
                    </div>
                </div>
                <Icon icon="arcticons:fpt-play" class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--arcticons" />
                <Icon icon="ri:more-2-line" class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--ri"/>
            </div>
        </div>
    </template>
  </div>
</template>

<script>
// import { UserDetails } from "@/service";//接口
export default {
    props:['resource'],//异步获取数据使用 if
    watch:{
        deep:true
    },
}
</script>

<style>

</style>