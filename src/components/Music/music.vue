<template>
  <div class="px-[4.5vw] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed  bg-[#fff] z-[10] bottom-[12vw]">
    <div class="flex items-center">
        <!-- 旋转 -->
        <div class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
            <!-- 外 -->
            <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
            <!-- 内 -->
            <img src="https://upload-bbs.miyoushe.com/upload/2023/12/06/245308015/83d927c021df9aac88def569675ea961_8484185421670592349.jpg?x-oss-process=image//resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,jpg" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
        </div>
        <!-- 文字 -->
        <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
            <span class="text-[#3E485E]">这个是歌单名</span>
            <span class="text-[#7B8591]">这个是作者名</span>
        </div>
    </div>
    <!-- 播放 -->
    <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw] overflow-hidden">
        <!-- 外 -->
        <div class="w-[5.6vw] h-[5.6vw]">
            
        </div>
        <!-- 暂停 -->
        <Icon icon="pepicons-print:triangle-right"  class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute iconify iconify--ph"/>
        <!-- 播放 -->
        <!-- <Icon icon="iconamoon:player-pause-thin"  class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute iconify iconify--ph"/> -->
    </div>
    <!--  -->
    <div class="pl-[4.5vw]">
        <Icon icon="icon-park-outline:menu-fold-one" class="text-[6vw] text-[#3b4152] iconify iconify--iconamoon"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>