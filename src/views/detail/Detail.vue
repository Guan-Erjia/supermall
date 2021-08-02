<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <better-scroll
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      ref="scroll"
      @loadMore="refresh"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goodsInfo="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-recommend :recommend="recommend"></detail-recommend>
    </better-scroll>
  </div>
</template>
<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import { getDetailData, Goods, Shop, Recommend } from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailRecommend from "@/views/detail/childComps/DetailRecommend";
import BetterScroll from "@/components/common/betterscroll/BetterScroll";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      recommend: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailRecommend,
    BetterScroll,
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
      console.log(res.result.detailInfo);
    });
  },
  methods: {
    refresh() {
      this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.scroll.finishPullUp();
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
  height: calc(100% - 44px);
  position: absolute;
  top: 44px;
  overflow: hidden;
}
</style>
