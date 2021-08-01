<template>
  <div class="detail-swiper">
    <swiper class="swiper1">
      <swiper-item
        class="swiper-item"
        v-for="each in topImages"
        :key="each.name"
      >
        <img :src="each" @load="SwiperLoad" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    SwiperLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.swiper-item {
  width: 100%;
  height: 300px;
}
</style>