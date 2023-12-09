<template>
    <div>
        <div class="bg-[#fff] fixed z-[3] van-hairline--top-bottom van-tabbar van-tabbar--fixed">
            <div class="van-tabbar-item">
                <div class="van-tabbar-item__icon">
                    <Icon  icon="ri:netease-cloud-music-fill" class="iconify iconify--ri" />
                </div>
                <router-link to="/home" class="van-tabbar-item__text">首页</router-link>
            </div>
            <div class="van-tabbar-item">
                <div class="van-tabbar-item__icon">
                    <Icon icon="icon-park-outline:ranking-list" class="iconify iconify--ri"/>
                </div>
                <router-link to="/Mv" class="van-tabbar-item__text">排行榜</router-link>
            </div>
            <div class="van-tabbar-item">
                <div class="van-tabbar-item__icon">
                    <Icon  icon="fluent:music-note-2-20-regular" class="iconify iconify--ri"/>
                </div>
                <router-link to="/my" class="van-tabbar-item__text">我的</router-link>
            </div>
            <div class="van-tabbar-item">
                <div class="van-tabbar-item__icon">
                    <Icon  icon="ph:wechat-logo-light" class="iconify iconify--ri" />
                </div>
                <router-link to="/home" class="van-tabbar-item__text">关注</router-link>
            </div>
            <div class="van-tabbar-item">
                <div class="van-tabbar-item__icon">
                    <Icon  icon="ph:wechat-logo-light" class="iconify iconify--ri" />
                </div>
                <router-link to="/home" class="van-tabbar-item__text">社区</router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapState } from "vuex";
export default {
    computed:{...mapState(["auth"])},
    created(){
        // console.log(this.auth);
    }
}
</script>

<style>
    .van-tabbar{
        height: auto ;
    }
</style>