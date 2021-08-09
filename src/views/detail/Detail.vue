<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <better-scroll
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="changePosition"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goodsInfo="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-recommend :recommend="recommend"></detail-recommend>
      <detail-param :params="param" ref="param"></detail-param>
      <detail-comment-info
        :rate="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <good-list :goods="recommendData" ref="goodrecommend"></good-list>
    </better-scroll>
    <back-top @click.native="backTop" v-if="backshow"></back-top>
    <detail-bottom-bar
      @addToCart="addtocart"
      @buyGoods="buygoods"
    ></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>
<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {
  getDetailData,
  getRecommendData,
  Goods,
  Shop,
  Recommend,
} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailRecommend from "@/views/detail/childComps/DetailRecommend";
import DetailParam from "@/views/detail/childComps/DetailParam";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import GoodList from "@/components/content/goodList/GoodList";
import BetterScroll from "@/components/common/betterscroll/BetterScroll";
import Toast from "@/components/common/toast/Toast";
import { debounce } from "@/common/utils";

import { backTopMixin } from "@/common/mixin";

export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      recommend: {},
      param: {},
      commentInfo: {},
      recommendData: [],
      themeTopYs: [0, 0, 0, 0],
      //防抖回调部分
      DetailImgListener: null,
      changeIndex: null,
      message: "",
      show: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailRecommend,
    DetailParam,
    DetailCommentInfo,
    DetailBottomBar,
    BetterScroll,
    GoodList,
    Toast,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = new Shop(res.result.shopInfo);
      this.recommend = new Recommend(res.result.detailInfo);
      this.param = res.result.itemParams;
      this.commentInfo = res.result.rate;
    });

    getRecommendData().then((res) => {
      for (let index = 0; index < res.data.list.length; index++) {
        this.recommendData.push(res.data.list[index]);
      }
    });
  },
  mounted() {
    this.DetailImgListener = debounce(this.$refs.scroll.refresh, 1000);
    this.$bus.$on("ImgLoaded", () => this.DetailImgListener());
    //封装防抖函数
    this.changeIndex = debounce(this.changePos, 1000);
    // console.log("aaa");
  },
  destroyed() {
    this.$bus.$off("ImgLoaded");
  },
  methods: {
    addtocart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 2000);
      });
    },
    buygoods() {
      console.log("购买");
    },

    titleClick(index) {
      this.themeTopYs[1] = this.$refs.param.$el.offsetTop;
      this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
      this.themeTopYs[3] = this.$refs.goodrecommend.$el.offsetTop;
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 1000);
    },
    //防抖函数回调
    changePosition(position) {
      this.changeIndex(position);

      //1.判断BackTop是否显示
      position.y < -1000 ? (this.backshow = true) : (this.backshow = false);
    },

    //源函数
    changePos(position) {
      if (this.themeTopYs) {
        this.themeTopYs[1] = this.$refs.param.$el.offsetTop;
        this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
        this.themeTopYs[3] = this.$refs.goodrecommend.$el.offsetTop;
        for (let index = 0; index < this.themeTopYs.length; index++) {
          if (
            this.$refs.nav.currentIndex !== index &&
            -position.y >= this.themeTopYs[index] &&
            -position.y < this.themeTopYs[index + 1]
          ) {
            this.$refs.nav.currentIndex = index;
            // console.log(index);
          } else if (
            this.$refs.nav.currentIndex !== index &&
            index === this.themeTopYs.length - 1 &&
            -position.y >= this.themeTopYs[index]
          ) {
            this.$refs.nav.currentIndex = index;
            // console.log(index);
          }
        }
      }
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 6;
}

.content {
  height: calc(100% - 44px - 49px);
  position: absolute;
  top: 44px;
  overflow: hidden;
}
</style>
