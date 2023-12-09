<template>
    <component
        :is="blocksTypeComponentMap[resource.blockCode]"
        :resource="resource"
        :auth="auth"
    />
</template>

<script>
// import Banner from "./Carousel.vue";
import RecommendPlaylist from "./PlayLists.vue";
import StylePlaylist from "./Song.vue";
import Toplist from "./Toplist.vue";
import RadarPlaylist from "./RadoPlaylist.vue";
// import NewSong from "";

// import Song from "./Song.vue"

const blocksTypeComponentMap = {
  // HOMEPAGE_BANNER: Banner,//轮播图
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecommendPlaylist,//推荐歌单
  HOMEPAGE_BLOCK_STYLE_RCMD: StylePlaylist,//相似推荐
  HOMEPAGE_BLOCK_TOPLIST: Toplist,//排行榜
  HOMEPAGE_BLOCK_MGC_PLAYLIST: RadarPlaylist,//你的雷达歌单
  // HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSong,//新歌新碟
  // HOMEPAGE_HEART_LYRICS:''

// HOMEPAGE_MUSICIAN_REVISIT:Song//关注没有数据
};
export default {
  name: "Block",
    data() {
    return {
      blocksTypeComponentMap,
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
    auth:{
      type: Object,
    }
  },
}
</script>

<style>

</style>