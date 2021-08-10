<template>
  <div id="proinfo">
    <div>
      <img src="@/assets/img/profile/message.svg" alt="" /><span>我的消息</span>
    </div>
    <div>
      <img src="@/assets/img/profile/pointer.svg" alt="" /><span>积分商城</span>
    </div>
    <div>
      <img src="@/assets/img/profile/vip.svg" alt="" /><span>会员卡</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProInfo",
};
</script>
<style scoped>
#proinfo {
  border-bottom: 15px solid rgb(240, 240, 240);
}
#proinfo div {
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