<template>
  <div id="detail">
    <nav-bar></nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goodsInfo="goods"></detail-base-info>
    <detail-shop-info :shopInfo="shop"></detail-shop-info>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
  </div>
</template>
<script>
import NavBar from "@/views/detail/childComps/DetailNavBar";
import { getDetailData, Goods, Shop } from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
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
      console.log(this.shop);
      // console.log(this.goods);
    });
  },
  methods: {
    //返回上一层
  },
};
</script>