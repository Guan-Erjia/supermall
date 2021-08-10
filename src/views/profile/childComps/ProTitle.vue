<template>
  <div id="title">
    <div class="left"><img src="@/assets/img/profile/avatar.svg" alt="" /></div>
    <div class="center">
      <div class="top">登录/注册</div>
      <div class="bottom">
        <img src="@/assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="right"><img src="@/assets/img/profile/right.png" alt="" /></div>
  </div>
</template>
<script>
export default {
  name: "ProTitle",
};
</script>
<style scoped>
#title {
  display: flex;
  height: 90px;
  align-items: center;
  color: white;
  padding: 0px 15px;
  background-color: var(--color-tint);
}
.left img {
  width: 70px;
  height: 70px;
}
.center {
  height: 60%;
  margin-left: 20px;
}
.center img,
.right img {
  width: 20px;
}
.top {
  font-size: 20px;
  line-height: 20px;
}
.bottom {
  height: 45px;
  display: flex;
  font-size: 15px;
}
.bottom img,
.bottom span {
  line-height: 45px;
}
.right{
  flex-grow: 1;
  text-align: right;
}
</style>