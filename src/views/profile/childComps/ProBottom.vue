<template>
  <div id="probottom">
    <div>
      <img src="@/assets/img/profile/cart.svg" alt="" /><span>我的购物车</span>
    </div>
    <div>
      <img src="@/assets/img/profile/shopping.svg" alt="" /><span>下载购物APP</span>
    </div>
  </div>
</template>
<script>
export default
{
  name:'ProBottom',
}
</script>
<style scoped>
#probottom div {
  height: 40px;
  line-height: 40px;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 15px;
}
img {
  height: 30px;
}
span {
  flex-grow: 1;
  padding: 0px 10px;
  border-top: 2px solid rgb(240, 240, 240);
}
</style>