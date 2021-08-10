<template>
  <swiper :banner="banners">
    <swiper-item v-for="each in banners" :key="each.name">
      <a :href="each.link">
        <img :src="each.image" @load="SwiperLoad" alt="" />
      </a>
    </swiper-item>
  </swiper>
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
        // console.log("swiper-loaded");
        this.isLoad = true;
      }
    },
  },
  props: {
    banners: {},
  },
};
</script>