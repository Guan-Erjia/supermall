<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <h2 class="title">{{ goodsInfo.title }}</h2>
    <div class="info-price">
      <span class="n-price">{{ goodsInfo.newPrice }}</span>
      <span class="o-price">{{ goodsInfo.oldPrice }}</span>
      <span v-if="goodsInfo.discount" class="discount">{{
        this.goodsInfo.discount
      }}</span>
    </div>
    <div class="columns" v-if="goodsInfo.columns">
      <span class="column">{{ goodsInfo.columns[0] }}</span>
      <span class="column">{{ goodsInfo.columns[1] }}</span>
      <!-- <span class="column">{{ goodsInfo.columns[2] }}</span> -->
      <span class="column">{{
        goodsInfo.services[goodsInfo.services.length - 1].name
      }}</span>
    </div>
    <div class="services">
      <span class="service" v-for="index in goodsInfo.services.length - 1">
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  font-size: 18px;
  color: #222;
}
.columns {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.services {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 60px;
}
.service img {
  width: 14px;
  height: 14px;
}
.service span {
  font-size: 13px;
  color: #333;
}
</style>