<template>
  <div class="tab-control">
    <div
      v-for="(each, index) in title"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ each }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabControlClick", this.currentIndex);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  background-color: white;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>