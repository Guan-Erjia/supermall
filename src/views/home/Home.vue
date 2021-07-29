<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <better-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @loadMore="loadMoreData"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature></feature>
      <tab-control
        @tabControlClick="tabControlClick"
        :title="['流行', '新款', '精选']"
        class="tab-control"
      ></tab-control>
      <good-list :goods="goods[currenttype].list"></good-list>
    </better-scroll>
    <back-top @click.native="backTop" v-if="backshow"></back-top>
  </div>
</template>
<script>
import HomeRecommend from "@/views/home/ChildCom/HomeRecommend";
import HomeSwiper from "@/views/home/ChildCom/HomeSwiper";
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import Feature from "@/views/home/ChildCom/Feature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goodList/GoodList";
import BetterScroll from "@/components/common/betterscroll/BetterScroll";
import BackTop from "@/components/content/backtop/BackTop";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    NavBar,
    HomeRecommend,
    Feature,
    TabControl,
    GoodList,
    BetterScroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenttype: "pop",
      backshow: "false",
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //监听滚动
    contentScroll(position) {
      position.y < -1000 ? (this.backshow = true) : (this.backshow = false);
      // console.log(this.backshow);
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then((response) => {
        this.banners = response.data.banner.list;
        this.recommends = response.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((response) => {
        // console.log(response);
        this.goods[type].list.push(...response.data.list);
        this.goods[type].page += 1;
        //刷新BetterScroll
        this.RefreshScroll();
        console.log("加载数据");
      });
    },

    //加载更多
    loadMoreData() {
      this.getHomeGoods(this.currenttype);
      //刷新监听
      this.$refs.scroll.finishPullUp();
    },
    RefreshScroll() {
      this.$refs.scroll.scroll.refresh();
    },

    //数据传递
    tabControlClick(index) {
      this.currenttype = Object.keys(this.goods)[index];
      console.log(Object.keys(this.goods)[index]);
    },
    backTop() {
      // console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500;
  font-size: 18px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 6;
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>