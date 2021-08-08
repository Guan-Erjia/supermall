<template>
  <div id="user-rate">
    <div class="title">
      <span class="title-left">用户评价</span>
      <span class="title-right">更多</span>
    </div>
    <div class="info" v-for="each in rate.list">
      <div class="user">
        <img :src="each.user.avatar" alt="" />
        <span>{{ each.user.uname }}</span>
      </div>
      <p class="paragraph">{{ each.content }}</p>
      <div class="user-info">
        <span class="created">{{ each.created | showDate }}</span>
        <span>{{ each.style }}</span>
      </div>
      <div v-for="each1 in each.images" v-if="each.images">
        <img class="rate-images" :src="each1" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "@/common/utils";

export default {
  name: "DetailcommentInfo",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-DD");
    },
  },
};
</script>
<style scoped>
#user-rate {
  border-bottom: 5px solid #f2f5f8;
  padding-bottom: 10px;
}
.title {
  display: flex;
  font-size: 15px;
  margin: 0 10px;
  line-height: 40px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.title-left {
  flex: 1;
}
.title-right {
  text-align: right;
  flex: 1;
}
.user {
  display: flex;
  align-items: center;
  font-size: 15px;
}
.user img {
  width: 50px;
  border-radius: 100%;
  margin: 5px 10px 0px 10px;
}
.user span {
  text-align: center;
}
.paragraph {
  font-size: 13px;
  margin: 10px;
  color: #999;
  line-height: 20px;
}
.user-info {
  color: rgba(112, 106, 106, 0.993);
  font-size: 13px;
  line-height: 10px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.rate-images {
  width: 100px;
  margin-left: 10px;
  margin-top: 0px;
}
.created {
  margin-right: 10px;
}
</style>