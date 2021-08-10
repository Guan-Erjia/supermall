<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabControlClick="tabControlClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <better-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @loadMore="loadMoreData"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature></feature>
      <tab-control
        @tabControlClick="tabControlClick"
        :title="['流行', '新款', '精选']"
        ref="tabControl2"
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
import { getHomeMultidata, getHomeGood } from "@/network/home.js";
import Feature from "@/views/home/ChildCom/Feature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goodList/GoodList";
import BetterScroll from "@/components/common/betterscroll/BetterScroll";
import BackTop from "@/components/content/backtop/BackTop";
//防抖函数
import { debounce } from "@/common/utils";

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
      tabOffsetTop: 0,
      isTabFixed: false,
      itemImgListener: null,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("ImgLoaded", this.itemImgListener);
  },
  deactivated() {
    this.$bus.$off("ImgLoaded", this.itemImgListener);
  },
  methods: {
    //监听滚动
    contentScroll(position) {
      //1.判断BackTop是否显示
      position.y < -1000 ? (this.backshow = true) : (this.backshow = false);

      //2.决定tapcontrol是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
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
      getHomeGood(type, page).then((response) => {
        // console.log(response);
        this.goods[type].list.push(...response.data.list);
        this.goods[type].page += 1;
        //刷新BetterScroll
        this.$refs.scroll.scroll.refresh();
        // console.log(this.$refs.scroll);
      });
    },

    //加载更多
    loadMoreData() {
      this.getHomeGoods(this.currenttype);
      // 刷新监听
      this.$refs.scroll.finishPullUp();
    },

    //点击请求数据传递
    tabControlClick(index) {
      this.currenttype = Object.keys(this.goods)[index];
      // console.log(Object.keys(this.goods)[index]);
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // console.log(this.$refs.tabControl1.currentIndex);
      // console.log(this.$refs.tabControl2.currentIndex);
    },
    backTop() {
      // console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },

    //赋值
    swiperImgLoad() {
      console.log("标题高度提取：" + this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500;
  font-size: 18px;
  /* position: fixed;
  z-index: 9; */
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
  position: absolute;
  top: 44px;
}
.tab-control {
  position: inherit;
  /* top: 44px; */
  z-index: 9;
}
</style>