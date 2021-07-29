<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // probeType: 3,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("---------------");
      this.$emit("loadMore");
    });
  },
};
</script>
<style scoped>
.wrapper {
  /* height: 150px; */
  background-color: cornsilk;
  overflow: hidden;
}
</style>