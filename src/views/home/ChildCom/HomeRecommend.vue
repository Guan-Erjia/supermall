<template>
  <div class="recommend">
    <div v-for="each in recommends" class="recommend-item">
      <a :href="each.link">
        <img :src="each.image" alt="" />
        <div>{{ each.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
img {
  display: flex;
  width: 65px;
  height: 65px;
  margin: auto;
  margin-bottom: 10px;
}
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0px 10px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  width: 25%;
}
</style>