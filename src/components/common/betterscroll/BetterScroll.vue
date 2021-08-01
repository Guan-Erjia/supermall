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
import {debounce} from "@/common/utils";
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
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.scrollTo && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("已更新");
      this.scroll && this.scroll.refresh();
    },
    emitpull() {
      console.log("---------------");
      this.$emit("loadMore");
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
    const a = debounce(this.emitpull, 200);
    this.scroll.on("pullingUp", () => {
      a();
      // this.$emit("loadMore");
    });
  },
};
</script>
<style scoped>
.wrapper {
  /* height: 150px; */
  /* background-color: cornsilk; */
  overflow: hidden;
}
</style>