<template>
  <div id="cart-bottom-bar">
    <div class="check-all">
      <div class="check-button">
        <check-button
          :isChecked="everycheck"
          @click.native="allClick"
        ></check-button>
      </div>
      <span>全选</span>
    </div>
    <div class="total-price">合计:￥{{ totalPrice }}</div>
    <div class="calc">去计算({{ totalcount }})</div>
  </div>
</template>
<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  data() {
    return {
      allCheck: true,
    };
  },
  computed: {
    totalPrice() {
      let sum = 0;
      for (let a = 0; a < this.$store.state.cartList.length; a++) {
        if (this.$store.state.cartList[a].checked) {
          sum +=
            this.$store.state.cartList[a].count *
            this.$store.state.cartList[a].price;
        }
      }
      return sum.toFixed(2);
    },
    totalcount() {
      let sum = 0;
      for (let a = 0; a < this.$store.state.cartList.length; a++) {
        if (this.$store.state.cartList[a].checked) {
          sum += 1;
        }
      }
      return sum;
    },
    everycheck() {
      let flag = true;
      for (let a = 0; a < this.$store.state.cartList.length; a++) {
        if (!this.$store.state.cartList[a].checked) {
          flag = false;
        }
      }
      this.allcheck = flag;
      return flag;
    },
  },
  methods: {
    allClick() {
      for (let a = 0; a < this.$store.state.cartList.length; a++) {
        this.$store.state.cartList[a].checked = this.allCheck;
      }
      this.allCheck = !this.allCheck;
    },
    calcClick() {
      let a = true;
      for (let a = 0; a < this.$store.state.cartList.length; a++) {
        if (this.$store.state.cartList[a].checked) {
          a = false;
        }
      }
    },
  },
};
</script>
<style scoped>
#cart-bottom-bar {
  position: fixed;
  bottom: 49px;
  height: 40px;
  display: flex;
  width: 100%;
  font-size: 15px;
}

.check-all {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
}
.check-button {
  width: 40px;
}
.check-all span {
  width: 40px;
}

.total-price {
  line-height: 40px;
  margin: 0 20px;
}
.calc {
  flex-grow: 1;
  text-align: center;
  line-height: 40px;
  background-color: var(--color-tint);
  color: #fff;
}
</style>