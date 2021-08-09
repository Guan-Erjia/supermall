<template>
  <div id="cart-list">
    <scroll class="content" :probeType="3" :pullUpLoad="true" ref="scroll">
      <cart-list-item
        v-for="(each, index) in cartList"
        :product="each"
        :key="index"
      ></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import scroll from "@/components/common/betterscroll/BetterScroll";
import CartListItem from "@/views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    scroll,
    CartListItem,
  },
};
</script>
<style scoped>
#cart-list {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
}
</style>