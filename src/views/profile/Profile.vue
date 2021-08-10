<template>
  <div>
    <nav-bar><div slot="center">我的信息</div></nav-bar>
    <pro-title></pro-title>
    <pro-center></pro-center>
    <pro-info></pro-info>
    <pro-bottom></pro-bottom>
    <div class="bottom"></div>
  </div>
</template>
<script>
import BetterScroll from "@/components/common/betterscroll/BetterScroll";
import NavBar from "@/components/common/navbar/NavBar";
import ProTitle from "@/views/profile/childComps/ProTitle";
import ProCenter from "@/views/profile/childComps/ProCenter";
import ProInfo from "@/views/profile/childComps/ProInfo";
import ProBottom from "@/views/profile/childComps/ProBottom";

export default {
  name: "Profile",
  components: {
    BetterScroll,
    NavBar,
    ProTitle,
    ProCenter,
    ProInfo,
    ProBottom,
  },
};
</script>