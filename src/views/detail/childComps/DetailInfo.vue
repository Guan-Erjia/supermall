<template>
  <div class="detailInfo">
    <button @click="a1">sdagasdg1sadg</button>
    <h2 class="title">{{ this.goodsInfo.title }}</h2>
    <div>
      <span>{{ this.goodsInfo.newPrice }}</span>
      <span>{{ this.goodsInfo.oldPrice }}</span>
      <span>{{ this.goodsInfo.discount }}</span>
    </div>
    <div class="columns">
      <div v-for="each in this.goodsInfo.columns" class="column">
        {{ each }}
      </div>
    </div>
    <div class="services">
      <div v-for="each in this.goodsInfo.services" class="service">
        <div>{{ each.name }}</div>
        <img :src="each.icon" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    a1() {
      console.log(this.goodsInfo);
    },
  },
};
</script>
<style scoped>
.title{
  font-size: 18px;
}
.columns {
  display: flex;
  text-align: center;
}
.column {
  display: flex;
  margin: 0 auto;
  flex: 1;
  height: 20px;
  font-size: 13px;
  color: gray;
  /* text-align: center; */
}
.services {
  display: flex;
  text-align: center;
}
.service {
  display: flex;
  margin: 0 auto;
  flex: 1;
  height: 15px;
  font-size: 13px;
  color: gray;
  /* text-align: center; */
}
</style>