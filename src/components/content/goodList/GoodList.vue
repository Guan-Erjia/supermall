<template>
  <div class="goodlist" v-if="goods">
    <good-list-item
      v-for="(each, index) in goods"
      :goodsItem="each"
      :key="index"
    ></good-list-item>
  </div>
</template>
<script>
import GoodListItem from "@/components/content/goodList/GoodListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
  mounted() {
    console.log(this.goods);
  },
};
</script>
<style scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>