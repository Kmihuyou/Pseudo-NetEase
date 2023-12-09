// 该文件的作用 :导入vue 基于App.vue创建结构渲染index.html
import Vue from "vue"; //导入vue
import App from "@/App.vue"; //导入根组件
import router from "@/router"; //导入路由
import store from "@/store";
import "@/assets/main.css";

import BottomTab from "@/components/bottom/BottomTab.vue"; //全局组件 底部Tab栏
import TitleComponent from "@/components/classify/TitleComponent.vue" //全局标题
import Scroll from "@/components/scroll/scroll.vue" //全局滑动组件
import { Icon } from '@iconify/vue2'; //全局图标
import Setup from '@/components/Setup/Setup.vue' //全局设置
import AudioPlayer from "@/components/AudioPlayer"
// import Music from "@/components/Music/music.vue"

import Vant from 'vant'; //移动端样式
import 'vant/lib/index.css'; //css
Vue.use(Vant);
Vue.use(AudioPlayer)

Vue.component('BottomTab', BottomTab) //底部Tab栏
Vue.component('TitleComponent', TitleComponent) //标题
Vue.component('Scroll', Scroll) //滑块
Vue.component('Icon', Icon) //图标
Vue.component('Setup', Setup) //设置

// Vue.component('Music', Music)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");