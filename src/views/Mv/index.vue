<template>
  <div>
    <div class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">MV排行榜</div>
    <van-tabs v-model="active" animated swipeable>
      <van-tab v-for="index in handoffarr" :key="index" :title="index">
          <div class="overflow-auto px-[4vw] h-[76vh]">
            <div v-for="(item,index) in list" :key="item.id" class="w-[92vw]">
                <div class="w-[100%] relative">
                    <router-link :to="{path:'/bf',query:{id:item.id}}">
                      <img :src="item.cover" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]" alt="">
                    </router-link>
                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                        <!-- 图标 -->
                    </div>
                    <div class="h-[15vw] flex items-center flex-wrap">
                        <div class="flex h-[5vw] w-[100vw]">
                            <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">{{index+1}}</span>
                            <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{item.name}}</span>
                        </div>
                        <div class="flex h-[4vw] items-center">
                            <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"></div>
                            <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                {{item.artistName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { MvList } from "@/service";//接口
// import { mapState } from "vuex";


export default {
  // computed:{...mapState(["blocks"])},
  // components:{Rankings},
  data(){
    return{
      list:"",
      active:0,
      handoffarr:['内地','港台','欧美','韩国','日本'],

    }
  },
  watch:{
    async active(){
      const [errorHomePageData, homePageData] = await MvList({area:this.handoffarr[this.active],limit:50});
      if (!errorHomePageData) this.list = homePageData.data.data;
    }
  },
  // methods(){
  //    fn(){
  //     async const [errorHomePageData, homePageData] = await MvList({area:'内地',limit:50});
  //     if (!errorHomePageData) this.list = homePageData;
  //     // const [errorHomePageData, homePageData] = await MvList({area:this.handoffarr[this.active],limit:50});
  //     // if (!errorHomePageData) this.list = homePageData;
  //   }
  // },
  async created() {
    const [errorHomePageData, homePageData] = await MvList({area:'内地',limit:50});
    if (!errorHomePageData) this.list = homePageData.data.data;
    console.log(this.list);
  },
  // created(){
  //   this.$store.dispatch('requestMvList',{area:this.handoffarr[this.active],limit:50})
  // }
}
</script>

<style>
  .van-tabs__wrap{
    margin-bottom: 5vw;
  }
</style>