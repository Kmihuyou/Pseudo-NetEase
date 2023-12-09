<template>
  <!-- 头部搜索框组件 -->
  <div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-evenly items-center">
        <!-- 菜单 -->

          <van-cell  @click="showPopup"><Icon icon="eva:menu-2-fill" /></van-cell>
          <!-- <Icon  @click="showPopup" icon="eva:menu-2-fill" /> -->
        <!-- <router-link :to="{path:'/login'}">
              <Icon icon="eva:menu-2-fill" />
        </router-link> -->
        
        <!-- 搜索框 -->
        <div class="relative">
          <label>
            <input type="text" placeholder="Love" class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]">
            <Icon icon="mynaui:search" class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"/>
            <Icon icon="lucide:scan-line" class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler"/>
          </label>
        </div>
        <!-- 音乐 --> 
        <Icon icon="streamline:music-note-1-solid" />
        <!-- <van-popup v-model="show" position="left" :style="{ height: '70%' }" /> -->
        <van-popup v-model="show" position="left" :style="{ height: '100%' }" >
          <Setup></Setup>
        </van-popup>
  </div>
</template>

<script>
// import { Icon } from '@iconify/vue2';
export default {
  name: 'HeadSearch',
  // components: {
	// 	Icon,
	// },
  data() {
    return {
      show: false,
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
  .van-cell{
    padding: 0 !important;
    width: auto !important;
    background-color:transparent !important;
  }
</style>