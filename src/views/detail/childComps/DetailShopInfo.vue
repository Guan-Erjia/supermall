<template>
  <div class="shop-info">
    <div class="shop-info-title">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <!-- <div>{{shopInfo.score}}</div> -->
    <div class="shop-desc">
      <div class="shop-desc-left">
        <div class="sell">
          <div class="number">{{ (shopInfo.sells / 10000).toFixed(1) }}万</div>
          <div class="text">总销量</div>
        </div>
        <div class="allgoods">
          <div class="number">{{ shopInfo.goodsCount }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-desc-right">
        <div v-for="each in shopInfo.score" class="item">
          <div class="item-name">{{ each.name }}</div>
          <div class="item-score">{{ each.score }}</div>
          <div class="item-isbetter" v-show="each.isBetter">高</div>
          <div class="item-islower" v-show="!each.isBetter">低</div>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-bottom-text">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.shop-info {
  padding: 25px 8px 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-info-title {
  display: flex;
}
.shop-info-title img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
}
.shop-info-title span {
  margin-left: 10px;
  line-height: 45px;
}
.shop-desc {
  margin-top: 20px;
  display: flex;
  flex: 1;
}
.shop-desc-left {
  display: flex;
  flex: 1;
  width: 50%;
  align-items: center;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sell {
  flex: 1;
}
.number {
  font-size: 18px;
}
.text {
  font-size: 12px;
  margin-top: 10px;
}
.allgoods {
  flex: 1;
}
.shop-desc-right {
  flex: 1;
  width: 50%;
}
.item {
  display: flex;
  font-size: 13px;
  padding: 5px 0;
  margin-left: 30px;
}
.item-name {
  left: 0;
  width: 65px;
}
.item-score {
  left: 0;
  width: 32px;
}
.item-isbetter {
  right: 0;
  background-color: red;
  color: white;
}
.item-islower {
  right: 0;
  background-color: lightgreen;
  color: white;
}
.shop-bottom {
  margin: auto;
  margin-top: 10px;
}
.shop-bottom-text {
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  width: 150px;
  height: 30px;
  background-color: #f2f5f8;
  font-size: 14px;
  border-radius: 10px;
  color: black;
}
</style>