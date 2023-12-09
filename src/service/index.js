import request from "@/utils/request";

import { co } from "@/utils";


import "@/utils/request"
/**
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量 , 默认为 30
 * @param {Number} data.offset 偏移数量，用于分页 , 如 :( 页数 -1)*30
 * @param {Number} data.type 类别（-1:全部、1:男歌手、2:女歌手、3:乐队）
 * @param {Number} data.area 地域（-1:全部、7华语、96欧美、8:日本、16韩国、0:其他）
 */
export const getArtistList = (data) => {
    return co(request.post(`/artist/list`, data));
};
/**
 * @description 搜索音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "
 * @param {Object} params 请求参数
 * @param {String} params.keywords 关键词
 * @param {Number} params.limit 返回数量，默认为 30
 * @param {Number} params.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30
 * @param {Number} params.type 类别 (1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样))
 * @returns {Promise}
 */
export const cloudsearch = (params) =>
    co(request.get("/cloudsearch", { params }));
/**
 * @description 获取 APP 首页信息 
 */
export const getHomePageData = () => co(request.post(`/homepage/block/page`));

/**
 * @description 获取 APP 首页信列表信息
 */
export const getHomepageDragonBall = () =>
    co(request.get("/homepage/dragon/ball"));

/**
 * 
 * @param {Object} data 调用此接口 ,传入手机号码, 可发送验证码
 * @param {Object} data.phone 手机号码
 * @returns 
 */
export const getCaptcha = (params) =>
    co(request.get("/captcha/sent", { params }));

/**
 *  
 * @param {Object} data 手机登录
 * @param {Object} data.phone 手机号码 
 * @param {Object} data.captcha 验证码 
 * @returns 
 */
export const getLoginCellphone = (params) =>
    co(request.get(`/login/cellphone`, { params }))


// export const


/**
 * @description 获取歌单详情
 * @param {Number} params  获取歌单详情  歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的
 * @param {String} params.id  必选参数 用户 id
 * 接口地址 : /user/detail
 * @param {Number} params.s  可选参数  歌单最近的 s 个收藏者,默认为 8
 * @returns 
 */
export const UserDetails = (params) =>
    co(request.get(`/playlist/detail`, { params }))

/**
 * @description 相关歌单推荐
 * @param {Number} params 调用此接口,传入歌单 id 可获取相关歌单
 * @param {String} params.id  必选参数 : id : 歌单 id
 */
export const CorrelationUserDetails = (params) =>
    co(request.get(`/related/playlist`, { params }))


/**
 * @description 获取用户信息 , 歌单，收藏，mv, dj 数量
 * @param {Number} params  登录后调用此接口 , 传入用户 id, 可以获取用户详情
 * @param {String} params.id  必选参数 用户 id
 * @returns 
 */
export const UserData = (params) =>
    co(request.get(`/user/detail`, { params }))


// /**
//  * @description 全部 mv
//  * @param {Number} params 调用此接口 , 可获取全部 mv
//  * @param {Number} params.area 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
//  * @param {Number} params.order 排序,可选值为上升最快,最热,最新,不填则为上升最快
//  * @param {Number} params.limit 取出数量 , 默认为 30
//  * @param {Number} params.offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0 
//  */
// export const MvList = (params) => 
// co(request.get(`/mv/all`,{params})) 

/**
 * @description mv 排行
 * @param {Number} params 调用此接口 , 可获取 mv 排行
 * @param {Number} params.area 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @param {Number} params.limit 取出数量 , 默认为 30
 * @param {Number} params.offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0 
 */
export const MvList = (params) =>
    co(request.get(`/top/mv`, { params }))


/**
 * @description mv 地址
 * @param {Number} params.id 必选参数 : id: mv id
 * @param {Number} params.area 可选参数 : r: 分辨率,默认 1080,可从 /mv/detail 接口获取分辨率列表

 */
export const MvlistPlay = (params) =>
    co(request.get(`/mv/url`, { params }))

/**
 * @param {*} track 音乐
 */
export const getTrackUrl = (track)=>{
    return co(
        request.post(`/song/url/v1?timestamp=${Date.now()}`,{
            id: track,
            level:"standard"
        })
    )
}

// 
export const getTrackDetail = (ids) =>
  co(request.get("/song/detail", { params: { ids } }));
