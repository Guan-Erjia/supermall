<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <img class="icon" src="@/assets/img/detail/service.png" alt="" />
        <span class="text">客服</span>
      </div>
      <div>
        <img class="icon" src="@/assets/img/detail/shop.png" alt="" />
        <span class="text">店铺</span>
      </div>
      <div>
        <img class="icon" src="@/assets/img/detail/collect.png" alt="" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buyGoods">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
    buyGoods() {
      this.$emit("buyGoods");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}

.bar-left {
  display: flex;
  flex: 1;
  font-size: 13px;
  height: 49px;
}
.bar-left div {
  flex: 1;
  flex-direction: column;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
}

.bar-right {
  flex: 1;
  display: flex;
}

.buy {
  background-color: #f69;
  flex: 1;
  line-height: 49px;
  color: #fff;
}
.cart {
  background-color: #ffe817;
  flex: 2;
  line-height: 49px;
}
</style>