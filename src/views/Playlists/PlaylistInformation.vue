<template>
<!-- 歌单信息 -->
  <div class=" transition-all duration-20 0 relative bg-gradient-to-br from-[#486D8D] to-[#6186AB] pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[13.5vw]">
    <van-button
      @click="mixin_player.replaceTracks(arr.map(({ id }) => id))"
      >播放全部</van-button
    >
    <!-- <div class="fixed top-0 h-[13.5vw] w-[100vw] left-0 z-[998] opacity-0"></div> -->
    <!-- 固定 -->
    <div class="fixed top-0 h-[13.5vw] w-[100vw] left-0 z-[998]  transition">
        <nav class="a2 pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between  bg-[#486D8D]">
            <div class="flex items-center">
                <Icon icon="solar:arrow-left-broken" color="white" class="text-[7vw] text-[#fff] iconify iconify--ph"/>
                <div  v-show="scrollbar" class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative">
                    <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] relative">歌单</div>
                </div>
                
                        <!-- <template v-if="resource.playlist !=undefined "> -->
                            <div v-if="!scrollbar" class="w-[42vw] h-[13.5vw] mt-[3.3vw] ">
                                <van-notice-bar
                                :text="resource.playlist.name"
                                />
                            </div>
                            <!-- <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] absolute textScrolling whitespace-nowrap">{{resource.playlist.name}}</div> -->
                        <!-- </template> -->
                
                <div v-show="!scrollbar" class="px-[2vw] flex items-center justify-center h-[7vw] rounded-[20px] bg-[#dedede] bg-opacity-10 text-[#f8fefe] text-[3vw] ml-[5vw] font-semibold">
                    <Icon icon="ph:pentagram-bold" />收藏
                </div>
            </div>
            <div class="flex items-center">
                <Icon icon="mynaui:search" class="text-[7vw] text-[#fff] mr-[5vw] iconify iconify--grommet-icons"/>
                <Icon icon="ri:more-2-fill" class="text-[7vw] text-[#fff] iconify iconify--ri" />
            </div>
        </nav>
    </div>
    <!-- 图片 -->
    <div v-show="judgment" class="transition-all fade-in">
        <section class="h-[29vw] flex pt-[2.6vw] justify-between">
            <!-- 图片 -->
            <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
                <!-- <template v-if="resource.playlist"> -->
                       <img :src="resource.playlist?.coverImgUrl" class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]">    
                        
                <!-- </template> -->
                <!-- <img :src="resource.playlist.coverImgUrl"> -->
                <div class="w-[20vw] h-[10vw] bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                <div class="absolute top-0 left-0 pr-[1.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2] transform scale-80">
                    <Icon icon="ic:round-arrow-right" color="white" />
                    <span class="font-[800] text-[1.5vw]">{{}}</span>
                </div>
            </div>
            <!-- 文字 -->
            <div class="w-[67vw] pr-[12vw]">
                <!-- <template v-if="resource.playlist"> -->
                       <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">{{resource?.playlist?.name}}</p>     
                <!-- </template> -->
                <!-- <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">{{resource.playlist.name}}</p> -->
                <div class="h-[10.5vw] flex items-center">
                    <!-- <template v-if="resource.playlist"> -->
                       <img :src="resource.playlist?.creator?.avatarUrl" alt="" class="w-[6vw] h-[6vw] rounded-[50%]">
                       <span class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">{{resource.playlist?.creator?.nickname}}</span>
                    <!-- </template> -->
                    <span class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                        <Icon icon="carbon:add" color="white" />
                        关注
                    </span>
                </div>
                <!-- <template v-if="resource.playlist"> -->
                    <div class="flex">
                        <div v-for="item in resource.playlist?.algTags" :key="item.id" class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                            <span class="text-[2.2vw]">{{item}}</span>
                            <Icon icon="ri:arrow-right-s-line" color="white" />
                        </div>
                    </div>
                <!-- </template> -->

            </div>
        </section>
        <!-- 分类 -->
        <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between">
            <!-- <template v-if="resource.playlist"> -->
                <span class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{resource.playlist?.description}}</span>
                <Icon icon="ri:arrow-right-s-line" color="white" class="text-[3vw] iconify iconify--ep"/>
            <!-- </template> -->
        </p>
    </div>
    <!-- 图片隐藏后显示 -->
    <div v-if="!judgment" class="fade-in">
        <div class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
            喜欢这个歌单的用户也听了
        </div>
        <Scroll class="w-[95vw] scroll-wrapper overflow-hidden" >
            <div :style="{ width: `${this.Correlation.length * 31}vw` }"  class="flex">
                
                    <div v-for="item in Correlation" :key="item.id" class="w-[28vw] mr-[2.5vw]">
                        <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                                <img @click.prevent="fn(item.id)" :src="item.coverImgUrl" alt="" class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                            <div class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
                        </div>
                        <div class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                            {{item.name}}
                        </div>
                    </div>
                
            </div>
        </Scroll>
    </div>
    <!--  -->
    <!-- 下箭头 -->
    <div @click="hide" class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center">
        <Icon v-show="judgment" icon="iconamoon:arrow-down-2-light" color="white" />
        <Icon v-show="!judgment" icon="iconamoon:arrow-up-2-light" color="white"/>
    </div>
    <!-- 转发 -->
    <div class="flex items-center mt-[3.5vw]">
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
            <Icon icon="basil:forward-solid" color="white" />
            <!-- <template v-if="resource.playlist"> -->
                {{resource.playlist?.shareCount}}
            <!-- </template> -->
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
           <Icon icon="ant-design:message-filled" color="white" />
           <!-- <template v-if="resource.playlist"> -->
                {{resource.playlist?.commentCount}}
            <!-- </template> -->
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
            <Icon icon="ic:outline-folder" />
            <!-- <template v-if="resource.playlist"> -->
                {{resource.playlist?.subscribedCount}}
            <!-- </template> -->
        </div>
    </div>
  </div>
</template>

<script>
import { UserDetails,CorrelationUserDetails } from "@/service";//接口
export default {
    // props:[''],
//   props: {
//     auth: {
//       type: Object,//登录数据
//     //   required: true,
//     },
//   resource: {
//     type: Object, // 确保类型为对象
//     default: function () {
//       return {}
//     }
//   }
// }
    data(){
        return{
            resource:'',
            Correlation:'',
            arr:[],
            scrollbar:true,
            judgment:true
        }
    },
// 获取接口数据
    async created() {
        const [Usererr, Userres] = await UserDetails({id:this.$route.query.id});
        if (!Usererr) this.resource = Userres.data
        // console.log(JSON.parse(JSON.stringify(Userres)));
        //  console.log(JSON.parse(JSON.stringify(this.resource.playlist.trackIds)));  
         this.arr = this.resource.playlist.trackIds
         this.arr.map(({ id }) => id)
         console.log(this.arr);

        const [Correlationerr, Correlationres] = await CorrelationUserDetails({id:this.$route.query.id});
        if (!Correlationerr) this.Correlation = Correlationres.data.playlists
        // console.log(Correlationres);
        // console.log(JSON.parse(JSON.stringify(this.Correlation)));    
   },
   mounted() {
    
    // 监听页面滚动事件
    window.addEventListener("scroll", this.scrolling);

  },
    methods: {
        fn(id){
            // console.log(id);
            // this.$store.commit('')
            this.$router.push('/Playlists'+'?id='+id)
            
            location.reload()
        },
        //点击隐藏显示
        hide(){
            this.judgment = !this.judgment
        }, 


    scrolling() {
      // 滚动条距文档顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 滚动条滚动的距离
      let scrollStep = scrollTop - this.oldScrollTop;
    //   console.log("header 滚动距离 ", scrollTop);
      // 更新——滚动前，滚动条距文档顶部的距离
      this.oldScrollTop = scrollTop;

      //变量windowHeight是可视区的高度
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //你想做的事情
        console.log("header  你已经到底部了");
      }
      if (scrollStep < 0) {
        // console.log("header 滚动条向上滚动了！");
      } else {
        // console.log("header  滚动条向下滚动了！");
        this.scrollbar = false
      }
      // 判断是否到了最顶部
      if (scrollTop <= 0) {
        console.log("header 到了最顶部")
        this.scrollbar = true
      } 
    },

    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolling);
    },

}

</script>

<style>
    .van-notice-bar{
        background-color:transparent; 
        color: #fff;
        font-size: 5vw
        /* text-[4.2vw] text-[#fff] ml-[4.7vw] absolute textScrolling whitespace-nowrap */
    }
</style>