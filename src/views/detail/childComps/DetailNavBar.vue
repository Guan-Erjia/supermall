<template>
  <div id="detail-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" @click="leftClick">
        <img src="@/assets/img/common/back.svg" class="back-img" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(each, index) in titles"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ each }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailItem",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    //返回上一层
    leftClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: #fff;
  color: black;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 15px;
}
.active {
  color: var(--color-high-text);
}
.back-img {
  margin-top: 12px;
}
</style>