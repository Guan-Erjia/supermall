<template>
  <swiper :banner='banners'>
    <swiper-item v-for="each in banners" :key="each.name">
      <a :href="each.link">
        <img :src="each.image" alt="" />
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
  props: {
    banners:{}
  },
};
</script>