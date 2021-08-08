<template>
  <div id="cart-list-item">
    <div class="button">
      <check-button
        @click.native="checkClick"
        :ischecked="isshow"
      ></check-button>
    </div>
    <img class="img" :src="product.image" alt="" />
    <div class="goods-info">
      <p class="title">{{ product.title }}</p>
      <p class="desc">{{ product.desc }}</p>
      <div class="info-bottom">
        <div class="price">￥{{ product.price }}</div>
        <div class="count">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
      this.isshow = this.product.checked;
      // console.log(this.isshow);
    },
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
#cart-list-item {
  display: flex;
  align-items: center;
  text-align: center;
  height: 120px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 2px;
  margin-top: 2px;
}

.button {
  width: 15%;
}

.img {
  padding: 5px 0px;
  width: 30%;
  background-size: cover;
  border-radius: 10px;
  max-height: 100%;
}
.goods-info {
  width: 65%;
  height: 100%;
  padding: 5px 10px;
}
.title,
.desc {
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  padding-top: 15px;
  font-size: 14px;
  color: #999;
}

.info-bottom {
  display: flex;
  margin-top: 35px;
}
.price {
  position: relative;
  text-align: left;
  flex: 1;
  color: orange;
}
.count {
  position: relative;
  text-align: right;
  flex: 1;
}
</style>