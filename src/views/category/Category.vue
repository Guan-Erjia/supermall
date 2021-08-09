<template>
  <div id="category">
    <nav-bar><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <better-scroll
        class="content-left"
        ref="scroll1"
        :pullUpLoad="true"
        @loadMore="refresh1"
      >
        <li
          v-for="(each, index) in category"
          @click="changeShow(index)"
          :class="{ active: index === currentkey }"
        >
          {{ each.title }}
        </li>
      </better-scroll>
      <better-scroll
        class="content-right"
        ref="scroll2"
        :pullUpLoad="true"
        @loadMore="refresh2"
      >
        <cate-title :items="subcategory"></cate-title>
        <good-list :goods="detailcategory" v-if="detailcategory"></good-list>
      </better-scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import GoodList from "@/components/content/goodList/GoodList";
import CateTitle from "@/views/category/childComps/CateTitle";

import BetterScroll from "@/components/common/betterscroll/BetterScroll";
import {
  getCateGory,
  getSubCateGory,
  getCateGoryDetail,
} from "@/network/category.js";

import { debounce } from "@/common/utils";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
      category: {},
      subcategory: [],
      detailcategory: [],
      currentkey: 0,
    };
  },
  components: {
    BetterScroll,
    NavBar,
    GoodList,
    CateTitle,
  },
  created() {
    this.getData();
  },
  mounted() {
    //监听图片加载完成
    const refresh = debounce(this.$refs.scroll2.refresh, 500);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("ImgLoaded", this.itemImgListener);
  },
  deactivated() {
    this.$bus.$off("ImgLoaded", this.itemImgListener);
  },
  methods: {
    refresh1() {
      this.$refs.scroll1.refresh();
      console.log("aaa");
    },
    refresh2() {
      this.$refs.scroll2.refresh();
      console.log("bbb");
    },
    getData() {
      getCateGory()
        .then((res) => {
          this.category = res.data.category.list;
          // console.log(this.category);
          return getSubCateGory(this.category[this.currentkey].maitKey);
        })
        .then((res) => {
          this.subcategory = res.data.list;
          console.log(this.subcategory);
          return getCateGoryDetail(this.category[this.currentkey].miniWallkey);
        })
        .then((res) => {
          this.detailcategory = res;
          this.$refs.scroll1.refresh();
          // console.log(this.detailcategory);
        });
    },
    changeShow(index) {
      this.currentkey = index;
      this.getData();
    },
  },
};
</script>
<style scoped>
#category {
  height: 100vh;
}
.content {
  display: flex;
  height: calc(100% - 44px - 50px);
}
.content-left,
.content-right {
  height: 100%;
}
.content-left {
  flex: 1;
  background-color: rgb(236, 236, 236);
}
.content-right {
  flex: 3;
  padding-top: 10px;
}

.content-left li {
  list-style: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.active {
  color: var(--color-tint);
  background-color: white;
  border-left: 6px solid var(--color-tint);
}
</style>