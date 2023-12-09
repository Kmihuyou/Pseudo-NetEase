<template>
  <!-- 轮播图组件 -->
  <section class="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto">
    <!-- 轮播图插件 -->
    <div class="my-swipe h-[100%] overflow-hidden relative flex van-swipe swiper-container">
        <!-- 图片 -->
        <div class="van-swipe__track swiper-wrapper">
            <div v-for="item in banners" :key="item.bannerId"  class="swiper-slide">
                <img :src="item.pic" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="van-swipe__indicators swiper-pagination"></div>
    </div>
    <!-- <button @click="fn">dian</button> -->
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {getHomePageData} from "@/service"
export default {
    updated (){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            autoplay:true,//自动切换

            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            // navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
            // },
            
            // 如果需要滚动条
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
        })    
    },
    data(){
        return{
            banners:[]
        }
    },
    methods:{
        // // async函数 本质上是promise语法的语法糖（简写）
        // async created() {
        // const [err, res] = await getHomePageData({
        //     type: 0,
        // });
        // if (err) return alert(err);
        // const {data:{data:{blocks:[{extInfo:{banners}}]}}} = res
        // this.banners = banners;
        // console.log(this.banners);
        // },
    },
    async created(){
        const [err, res] = await getHomePageData({
            type: 0,
        });
        if (err) return alert(err);
        const {data:{data:{blocks:[{extInfo:{banners}}]}}} = res
        this.banners = banners;
        // console.log(this.banners);
        // console.log(res.data);
    }
}
</script>

<style>
</style>