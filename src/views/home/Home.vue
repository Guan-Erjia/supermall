<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends='recommends'></home-recommend>
  </div>
</template>
<script>

import HomeRecommend from '@/views/home/ChildCom/HomeRecommend';
import HomeSwiper from "@/views/home/ChildCom/HomeSwiper";
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    NavBar,
    HomeRecommend
  },
  data () {
    return {
      banners:[],
      recommends:[]
    };
  },
  created() {
    getHomeMultidata().then((response) => {
      this.banners = response.data.banner.list;
      this.recommends = response.data.recommend.list;
      console.log(response.data);
    });
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500;
  font-size: 18px;
}
</style>