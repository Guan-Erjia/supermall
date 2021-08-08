<template>
  <div id="detailparam" v-if="Object.keys(params).length !== 0">
    <table v-for="each in params.rule.tables">
      <tr v-for="each1 in each">
        <td class="size-item" v-for="each2 in each1">{{ each2 }}</td>
      </tr>
    </table>
    <table class="bottom-table">
      <tr v-for="each in params.info.set">
        <td class="info-param-key">{{ each.key }}</td>
        <td class="info-param-value">{{ each.value }}</td>
      </tr>
    </table>
    <table class="other"></table>
    <div class="info-img" v-if="params.info.images">
      <img :src="params.info.images[0]" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParam",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#detailparam {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
  border-collapse: collapse;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.size-item {
  display: table-cell;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  /* text-align: center; */
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-param-value {
  color: #eb4868;
}
.bottom-table {
  border-top: 2px solid rgba(100, 100, 100, 0.1);
}
</style>

