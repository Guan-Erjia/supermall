<template>
  <div id="proCenter">
    <div>
      <div><span>10.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div>
      <div><span>3</span>个</div>
      <div>我的优惠</div>
    </div>
    <div>
      <div><span>2245</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProCenter",
};
</script>
<style scoped>
#proCenter {
  display: flex;
  font-size: 15px;
  height: 100px;
  align-items: center;
  border-bottom: 15px solid rgb(240, 240, 240);
}
#proCenter div {
  flex: 1;
  text-align: center;
}
span {
  font-size: 22px;
  color: indianred;
}
</style>