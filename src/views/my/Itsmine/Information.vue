<template>
<div class=" my-[atuo]">
  <!-- 信息 -->
    <div class="px-[4vw]  mt-[12vw]">
        <div class="dark:from-[#2D2C2C] dark:to-[#161616]  to-[#f1f1f1]  mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
          <img src="http://p2.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg" alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]">
          <p class="dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]">aaaa</p>
          <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
            <span class="px-[2vw]">
              <span></span>关注
            </span>
            <span class="px-[2vw]">
              <span></span>粉丝
            </span>
            <span class="px-[2vw]">
              Lv.<span></span>
            </span>
          </div>
        </div>
    </div>
    <!-- <div class="px-[4vw] pb-[5vw] mt-[12vw]">
        <div class=" to-[#f1f1f1]  mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[4vw] text-center pb-[3.8vw] px-[5vw]"> -->
          <!-- <div class="flex">
              <div class="flex items-center ">
                <Icon icon="gridicons:play"/>
                <p class="text-[12px]">播放</p>
              </div>
          </div> -->

          <div class="w-[94vw] h-[50vw] bg-[#FFFFFF] m-auto  rounded-xl my-[4vw]">
            <ul class=" application">
                <li>
                    <span><Icon icon="carbon:play-filled" /></span>
                    <span>最近播放</span>
                </li>
                <li>
                    <span><Icon icon="entypo:music" /></span>
                    <span>本地下载</span>
                </li>
                <li>
                    <span><Icon icon="mdi:shopping" /></span>
                    <span>已购</span>
                </li>
                <li>
                    <span><Icon icon="fa-solid:user-friends" /></span>
                    <span>我的好友</span>
                </li>
                <li>
                    <span><Icon icon="iconamoon:star-fill" /></span>
                    <span>搜藏和赞</span>
                </li>
                <li>
                    <span><Icon icon="material-symbols:cloud" /></span>
                    <span>推荐精选</span>
                </li>
                <li>
                    <span><Icon icon="mingcute:fire-fill" /></span>
                    <span>云推歌</span>
                </li>
                <li>
                    <span><Icon icon="ph:cassette-tape-fill" /></span>
                    <span>经典专区</span>
                </li>
            </ul>
          </div>
        </div>
    <!-- </div>
</div> -->
    
    <!--  -->
    
</template>

<script>
export default {

}
</script>

<style scoped>
.lset{
    border-top:2px solid #F3F3F3;
    color: #C2C4CA;
    line-height: 10vw;
}
.application{
    display: flex; 
    flex-wrap: wrap;
}
.application>li{
    text-align: center;
    display: flex;
    width: 23vw;
    height: 17vw;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
}
.application>li>span:nth-child(1){
     font-size: 10vw;
    color: red;
    display: inline-block;
    text-align: center;
}

.application>li>span:nth-child(2){
    margin-top: 3vw;
     font-size: 2vw;
}
</style>