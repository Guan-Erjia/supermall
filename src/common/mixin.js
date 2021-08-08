import BackTop from "@/components/content/backtop/BackTop";
export const backTopMixin = {
  data() {
    return {
      backshow: false
    }
  },
  methods: {
    backTop() {
      // console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
  },
  components: {
    BackTop,
  }
}