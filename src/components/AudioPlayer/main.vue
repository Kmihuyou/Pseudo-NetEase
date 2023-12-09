<template>
    <div>
        <!--  -->
        <!-- 音乐播放器 -->
        <div class="px-[4.5vw] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed  bg-[#fff] z-[10] bottom-[12vw]">
            <div class="flex items-center">
                <!-- 旋转 -->
                <div class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
                    <!-- 外 -->
                    <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                    <!-- 内 -->
                    <img :src="mixin_player.currentTrackDetail?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
                </div>
                <!-- 文字 -->
                <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                    <span class="text-[#3E485E]">{{mixin_player.currentTrackDetail?.name}}</span>
                    <span class="text-[#7B8591]">{{mixin_player.currentTrackDetail?.ar?.map(({ name }) => name).join("/")}}</span>
                </div>
            </div>
            <!-- 播放 -->
            
            <div @click="mixin_player.toggle()" class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" >
                <!-- 外 -->
                    <van-circle
                        size="5.6vw"
                        :value="mixin_player.progress * 100"
                        :color="gradientColor"
                        :speed="100"
                        />
                <div>
                     <!-- 暂停 -->
                    <Icon
                        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                        :icon="mixin_player.playing ? 'iconamoon:player-pause-thin' : 'solar:play-broken'"
                    />

                    <!-- 播放 -->
                </div>
               
            </div>
            <!--  -->
            <div class="pl-[4.5vw]">
                <van-cell @click="showPopup">
                    <Icon icon="icon-park-outline:menu-fold-one" class="text-[6vw] text-[#3b4152] iconify iconify--iconamoon"/>
                </van-cell>
            </div>
        </div>
        <!-- 音乐播放器end -->
        <!-- 弹出 -->
        <van-popup v-model="show" round position="bottom" :style="{ height: '70%' }" class="px-[5.4vw]">
            <div class="playmusic py-[6vw]">
                <h1 class="text-[4vw] font-extrabold">
                    当前播放
                    
                </h1>
            </div>
        </van-popup>
    </div>
  
</template>

<script>
// import Player from "./player.js"
// const player = new Player()
export default {
    name: "AudioPlayer",
    data() {
        return {
            show: false,
            currentRate: 0,
            gradientColor: {
                '0%': '#3fecff',
                '100%': '#6149f6',
            },
        };
    },
    methods: {
        showPopup() {
        this.show = true;
        },
    },
}
</script>

<style>

</style>