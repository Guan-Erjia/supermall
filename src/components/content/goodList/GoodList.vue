<template>
  <div class="goodlist">
    <good-list-item v-for="each in goods" :goodsItem="each"></good-list-item>
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
  // created() {
  //   console.log(this.goods);
  // },
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