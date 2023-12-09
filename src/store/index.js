import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate"
import { 
    getHomePageData,
    getHomepageDragonBall, 
    getLoginCellphone, 
    MvList,
    UserDetails,
} from "@/service"; //接口
Vue.use(Vuex);

const store = new Vuex.Store({
    state: { //存储公共数据
        blocks: [], //blocks首页全部数据
        menus: [], //首页信列表信息
        auth: {}, //登录后的全部数据
        lists: {}, //排行榜Mv数据
        isDarkMode: false, //夜间模式
        Playlists:{}//歌单列表数据
    },

    mutations: { //定义同步修改公共数据
        // store.commit('increase')
        updateBlocks(state, res) {
            state.blocks = res.data.data.blocks
        },
        updateMenus(state, res) {
            state.menus = res.data.data
        },
        updateAuth(state, res) {
            state.auth = res.data;
        },
        updateList(state, res) {
            state.lists = res.data;
        },
        changDarMode(state, payload) {//夜间模式
            state.isDarkMode = payload
        },
        updatePlaylists(state,res){
            state.Playlists = res.data;
        }
    },

    //actions如同触发store.dispatch
    actions: { //定义异步修改公共数据(借助 mutations)
        async requestHomePageData(store) { //首页数据
            const [err, homePageData] = await getHomePageData()
            if (err) return
            store.commit('updateBlocks', homePageData)
        },
        async requestHomepageDragonBall() { //首页信列表信息
            const [err, homepageDragonball] = await getHomepageDragonBall()
            if (err) return
            store.commit('updateMenus', homepageDragonball)
        },
        async requestLoginCellphone(store, data) { //登录
            const [err, logininCellphone] = await getLoginCellphone(data);
            if (err) return alert("请求错误，请稍后再试！");
            store.commit("updateAuth", logininCellphone);
        },
        async requestMvList() { //排行榜 未使用
            const [err, mvList] = await MvList()
            if (err) return
            console.log('mvList', mvList);
            store.commit('updateList', mvList)
        },
        async requestUserDetails() { //歌单详情
            const [err, userDetails] = await UserDetails()
            if (err) return
            store.commit('updatePlaylists', userDetails)
        },

    },

    // getters: {},

    // plugins  扩展其他额外功能
    // 将state中的数据实施缓存本地
    plugins: [persistedstate()]
});

export default store;


window.store = store;