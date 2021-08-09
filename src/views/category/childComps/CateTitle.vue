<template>
  <div id="catetitle">
    <div v-for="each in items" class="item">
      <img :src="each.image" alt="" />
      <div class="title">{{ each.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CateTitle",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log(this.items);
  },
};
</script>
<style scoped>
#catetitle {
  margin-left: 10px;
  font-size: 15px;
}
.item {
  display: inline-block;
  align-items: center;
  padding-right: 20px;
}
.item img {
  width: 80px;
}
.title {
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>