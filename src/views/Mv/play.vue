<template>
  <div class="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap absolute">
    <!-- 返回 -->
    <div
      class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]"
    >
      <Icon
        icon="iconamoon:arrow-left-2-duotone"
        class="text-[6vw] text-[#fefefe] iconify iconify--ep"
      />
      <div class="flex items-center">
        <Icon
          icon="fluent:resize-video-20-regular"
          class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
        />
        <Icon
          icon="mingcute:more-2-fill"
          color="white"
          class="text-[6vw] text-[#fefefe] iconify iconify--ri"
        />
      </div>
    </div>
    <!-- 返回 -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- <video :src="resources.url" autoplay controls></video> -->


    <div class="plyr__video-embed w-[100%] h-[54vw] absolute top-[12%]" id="player" >
            <div class="plyr__video-wrapper">
            <video
                loop=""
                autoplay="autoplay"
                :src="resources.url"
            ></video>
            </div>
        </div>


    <!--  -->
    <!--  -->
    <!--  -->
    <div class="w-[100%] absolute bottom-[0vw]">
      <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
        <!-- 左边 -->
        <div class="flex-1 mr-[10vw]">
            <!-- 头像 -->
            <div class="flex items-center mb-[3vw]"></div>
            <!-- 简介 -->
            <div class="mb-[5vw] van-collapse van-hairline--top-bottom"></div>
            <div class="flex items-center"></div>
        </div>
        <!-- 右边 -->
        <div class="w-[10vw]">
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon
              icon="prime:thumbs-up-fill"
              color="white"
              class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
            />
            <span class="text-[#eaeaea] text-[3vw]"></span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon
              icon="ant-design:message-outlined"
              color="white"
              class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--uis"
            />
            <span class="text-[#eaeaea] text-[3vw]"></span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon
              icon="basil:forward-solid"
              color="white"
              class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--majesticons"
            />
            <span class="text-[#eaeaea] text-[3vw]"></span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon
              icon="fluent:collections-16-filled"
              color="white"
              class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--fluent"
            />
            <span class="text-[#eaeaea] text-[3vw]"></span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    
  </div>
</template>

<script>
import Plyr from 'plyr';
import { MvlistPlay } from "@/service";
export default {
  mounted(){
     new Plyr('#player');
  },
  data() {
    return {
      resources: "",
    };
  },
  async created() {
    const [err, res] = await MvlistPlay({ id: this.$route.query.id });
    if (!err) this.resources = res.data.data;
    console.log(this.resources);
  },
};
</script>

<style>
</style>