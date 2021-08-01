<template>
  <div id="detail">
    <nav-bar></nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-info :goodsInfo="goods"></detail-info>
  </div>
</template>
<script>
import NavBar from "@/views/detail/childComps/DetailNavBar";
import { getDetailData, Goods } from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailInfo from "@/views/detail/childComps/DetailInfo";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
    };
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailInfo
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
      // console.log(res.result);
      // console.log(this.goods);
    });
  },
  methods: {
    //返回上一层
  },
};
</script>