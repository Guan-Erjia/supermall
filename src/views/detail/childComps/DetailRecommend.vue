<template>
  <div id="DetailRecommend">
    <div class="recommend-title">
      <div class="desc-top"></div>
      <div class="desc-text">{{ recommend.desc }}</div>
      <div class="desc-bottom"></div>
    </div>
    <div class="recommend-info" v-if="recommend.detailImage">
      <div class="recommend-info-key">{{ recommend.detailImage[0].key }}</div>
      <img
        class="recommend-info-img"
        v-for="each in recommend.detailImage[0].list"
        :src="each"
        alt=""
        @load="Imgload"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailRecommend",
  props: {
    recommend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    Imgload() {
      this.$bus.$emit("ImgLoaded");
    },
  },
};
</script>
<style scoped>
#DetailRecommend {
  padding: 20px 0px 20px 0px;
  border-bottom: 5px solid #f2f5f8;
}
.desc-top,
.desc-bottom {
  width: 90px;
  height: 2px;
  background-color: lightpink;
  position: relative;
}
.desc-top {
  float: left;
}
.desc-bottom {
  float: right;
}
.recommend-info-img {
  width: 100%;
}
.desc-text {
  padding: 15px 0;
}
.recommend-info-key {
  margin: 10px;
  margin-left: 15px;
}
.recommend-title {
  margin: 0px 5px;
}
</style>