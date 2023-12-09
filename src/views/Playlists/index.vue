<template>
  <!-- 歌单列表 -->
  <div>
    <!-- <Paly :auth="auth"></Paly> -->
    
    <Paly></Paly>
    <PalyList :resource="resource" ></PalyList>
    <!-- 查询参数获取的参数值 传多个 id -->
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Paly from "./PlaylistInformation.vue"
import PalyList from "./PlaylistList.vue"

import { UserDetails, } from "@/service";//接口
export default {
    // computed:{
    //     ...mapState(["auth"])
    // },
    components:{
        Paly,
        PalyList
    },
    data(){
      return{
        resource:'',
        Correlation:'',
        arr:[],
      }
    },
    async created() {
      const [Usererr, Userres] = await UserDetails({id:this.$route.query.id});
      if (!Usererr) this.resource = Userres.data

      // console.log(this.resource.playlist.trackIds);
      this.arr = this.resource.playlist.trackIds
        this.arr.map(({id})=>{id})
        console.log(this.arr);
   },
    
}
</script>

<style>

</style>