<template>
  <div class="check-button" :class="{ ischoosed: ischecked }">
    <img src="@/assets/img/cart/uncheck.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  data() {
    return {
      isshow: true,
    };
  },
  props: {
    ischecked: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>
<style scoped>
.check-button img {
  width: 30px;
  background-color: lightpink;
  border-radius: 100%;
}
.ischoosed img {
  background-color: red;
}
</style>