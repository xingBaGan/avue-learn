<template>
  <div>
      <h1>I want to export Excel</h1>
    <el-button class="primary" @click="exportExcel"> export excel</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opt: {
        title: "文档标题2",
        column: [
          {
            label: "标题",
            prop: "title",
          },
          {
            label: "nums",
            prop: "nums",
          },
        ],
        data: [
          {
            title: "测试数据1",
            nums:12
          },
          {
            title: "测试数据2",
            nums:14
          },
        ],
      },
    };
  },
  methods: {
    exportExcel() {
      this.$export.excel({
        title: this.opt.title || new Date().getTime(),
        columns: this.opt.column,
        data: this.opt.data,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
