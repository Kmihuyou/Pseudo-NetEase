<template>
  <div class="bg-[#f1f1f1]">
    <!-- <Head></Head>
        <Information></Information> -->
    <div class="pb-[24vw]">
      <!-- 登录路由 / 搜索 -->
      <div>
        <div class=" w-[100vw] h-[10vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]">
            <div class="fixed top-0 h-[10vw] w-[100vw] left-0 z-[998]  transition">
                <nav class="a2 pl-[3.9vw] pr-[3.4vw] h-[10vw] flex items-center justify-between">
                        <Icon icon="foundation:indent-more" class="text-[7vw]  iconify iconify--ph"/>
                        <Icon icon="prime:search" class="text-[7vw]  iconify iconify--ri" />
                </nav>
            </div>
        </div>
        <div class="w-[100vw] h-[15vw] px-[4.5vw]"></div>
    </div>
      <!--  -->
      <!-- 信息 -->
      <div class="px-[4vw]  mt-[15vw]">
          <div class="dark:from-[#2D2C2C] dark:to-[#161616]  to-[#f1f1f1]  mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
            <div class="absolute top-[-18vw] left-1/2 translate-x-[-50%] w-[21vw] px-[3vw] py-[1vw] text-[3vw] bg-[#fff] rounded-full">
              +添加状态
            </div>
            <template v-if="resources.profile !=undefined ">
                <img :src="resources.profile.avatarUrl" alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]">
            </template>
            <template v-if="resources.profile !=undefined ">
                <p class="dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]">{{resources.profile.nickname}}</p>
            </template>
            <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
                <span class="px-[2vw]">
                    <template v-if="resources.profile !=undefined ">
                      <span>{{resources.profile.newFollows}}</span>
                    </template>
                    关注
                </span>
                <span class="px-[2vw]">
                    <span>0</span>粉丝
                </span>
                <span class="px-[2vw]">
                    Lv.<span>{{resources.level}}</span>
                </span>
            </div>
          </div>
      </div>
      <!-- xx -->
      <div class="dark:bg-[#151515] bg-[#f1f1f1] px-[4vw] pb-[10vw] mt-[5vw]">
        <!-- 最近播放 -->
        <div class="bg-[#fff] w-[92vw] rounded-[15px] px-[5vw] py-[3vw]">
          <ul class=" grid grid-cols-4 gap-4 justify-items-center">
            <li class="flex flex-col items-center">
              <Icon icon="heroicons-solid:play" color="red"  width="5vw"/>
             <p class="text-[2.4vw]">最近播放</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="icon-park-solid:folder-music" color="red" width="5vw"/>
             <p class="text-[2.4vw]">本地下载</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="iconamoon:cloud-upload-fill" color="red" width="5vw" />
             <p class="text-[2.4vw]">云盘</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="material-symbols-light:shopping-bag" color="red" width="5vw" />
             <p class="text-[2.4vw]">已购</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="grommet-icons:contact-info" color="red" width="5vw" />
             <p class="text-[2.4vw]">我的好友</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="ic:round-star" color="red" width="5vw" />
             <p class="text-[2.4vw]">收藏和点赞</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="icon-park-outline:broadcast" color="red" width="5vw" />
             <p class="text-[2.4vw]">我的播客</p>
            </li>
            <li class="flex flex-col items-center">
              <Icon icon="solar:heart-broken" color="red" width="5vw" />
             <p class="text-[2.4vw]">乐谜团</p>
            </li>
          </ul>
          <div class="flex justify-center items-end h-[7vw] mt-2 border-t text-[3vw]" >
            <span>+音乐应用</span>
          </div>
        </div>
        <!-- 最近播放end -->
        <!-- 我喜欢的音乐 -->
        <div class="flex items-center justify-between bg-[#fff] w-[92vw] rounded-[15px] px-[5vw] py-[3vw] mt-5">
          
          <div class="flex items-center">
            <img v-if="resources.playlist !=undefined" :src="resources.playlist.coverImgUrl" alt="" class="w-[12vw] h-[12vw] rounded-[12px]">
            <div class="mx-[3vw]">
              <h4>我喜欢的音乐</h4>
              <p v-if="resources.playlist !=undefined" class="text-[2vw] text-[rgb(147,150,162)]">{{resources.playlist.privacy}}首</p>
            </div>
          </div>
          <div class="flex items-center h-[7vw] px-[2vw] py-[1vw] rounded-full border">
            <Icon icon="healthicons:heart-cardiogram-outline" color="red" />
            心动模式
          </div>
        </div>
        <!-- 我喜欢的音乐end -->
        <div>
          <nav
            class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto"
          >
            <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">
              主页
            </div>
            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
              动态
            </div>
            <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">
              播客
            </div>
            <div
              class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"
            ></div>
          </nav>
          <div>
            <div
              class="dark:bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]"
            >
              <h1
                class="dark:text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]"
              >
                音乐品味
              </h1>
              <div class="flex justify-evenly">
                <div
                  class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                >
                  <div
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    我的喜欢
                  </div>
                  <p
                    class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                  >
                    0首
                  </p>
                  <div
                    class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      class="iconify iconify--ph mr-[0.8vw] text-[2.6vw]"
                      style="color: rgb(169, 170, 178)"
                    >
                      <path
                        fill="currentColor"
                        d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"
                      ></path></svg
                    >喜欢的音乐
                  </div>
                </div>
                <div
                  class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"
                >
                  <div
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    累计听歌
                  </div>
                  <p
                    class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                  >
                    461首
                  </p>
                  <div
                    class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="iconify iconify--ri mr-[0.8vw] text-[2.6vw]"
                      style="color: rgb(169, 170, 178)"
                    >
                      <path
                        fill="currentColor"
                        d="M2 9h2v12H2V9Zm6-6h2v18H8V3Zm6 9h2v9h-2v-9Zm6-6h2v15h-2V6Z"
                      ></path></svg
                    >喜欢的音乐
                  </div>
                </div>
                <div
                  class="dark:from-[#424242] dark:to-[#303030] dark:border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative pr-[1.9vw]"
                >
                  <div
                    class="dark:text-[#AFAFAF] text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]"
                  >
                    本周关键词
                  </div>
                  <p
                    class="dark:text-[#DFDFDF] text-[3.5vw] text-[#5A565D] pl-[1.7vw]"
                  >
                    属于你的音乐档案
                  </p>
                  <div
                    class="dark:text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="0.75em"
                      height="1em"
                      viewBox="0 0 384 512"
                      class="iconify iconify--fa-solid mr-[0.8vw] text-[2.6vw]"
                      style="color: rgb(169, 170, 178)"
                    >
                      <path
                        fill="currentColor"
                        d="M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24c0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64z"
                      ></path></svg
                    >黑胶时光机
                  </div>
                </div>
              </div>
            </div>
            <div
              class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
            >
              <p
                class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
              >
                创建的歌单<span
                  class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                  >(0个)</span
                >
              </p>
              <ul class="px-[4vw] pb-[4vw]"></ul>
              <div></div>
            </div>
            <div
              class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
            >
              <p
                class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
              >
                收藏的歌单<span
                  class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                  >(0个)</span
                >
              </p>
              <ul class="px-[4vw] pb-[4vw]"></ul>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// import Head from "./my/Itsmine/head.vue";
// import Information from "./my/Itsmine/Information.vue";
import { UserData } from "@/service";//接口
export default {
  components: {
    // Head,
    // Information,
  },
  data(){
    return{
      resources:''
    }
  },
   async created() {
        // console.log(this.$route.query.id);
        // UserDetails
    const [err, res] = await UserData({uid:this.$route.query.id});
    if (!err) this.resources = res.data
    console.log(this.resources);
    // console.log(this.resource);
    // console.dir(this.resource)
    console.log(JSON.parse(JSON.stringify(this.resources)));    
   },
};
</script>

<style>
</style>