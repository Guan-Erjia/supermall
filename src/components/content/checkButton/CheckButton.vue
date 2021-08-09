<template>
  <div class="check-button" :class="{ ischoosed: isChecked }">
    <img src="@/assets/img/cart/uncheck.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>
<style scoped>
.check-button img {
  width: 25px;
  background-color: lightpink;
  border-radius: 100%;
}
.ischoosed img {
  background-color: red;
}
</style>