<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div>{{result}}</div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from '@/network/home.js'
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data () {
    return {
      result:''
    }
  },
  created () {
    getHomeMultidata().then(response=>{
      console.log(response);
      this.result=response;
    })
  }
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500;
  font-size: 18px;
}
</style>