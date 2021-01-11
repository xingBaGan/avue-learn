<template>
<div>
    <avue-crud ref="crud"
              :option="option"
              :page.sync="page"
              :table-loading="loading"
              @on-load="getList"
              @row-update="rowUpdate"
              @row-save="rowSave"
              @row-del="rowDel"
              @refresh-change="refreshChange"
              @search-reset="searchChange"
              @search-change="searchChange"
              v-model="form"
              :data="data">
  </avue-crud>
</div>
  
</template>

<script>
// import { mapGetters } from "vuex";
import { getList, update, add, del } from '@/helper/temp-api.js'
import option from '@/helper/temp-option.js'
export default {
  data () {
    return {
      page: {},
      form: {},
      params: {},
      loading: false,
      data: [],
      option: option(this)
    }
  },
  created () {

  },
  computed: {
    // ...mapGetters(['userInfo'])
  },
  methods: {
    getList () {
      this.loading = true;
      const data = Object.assign({
        pageNum: this.page.currentPage,
        pageSize: this.page.pageSize,
      }, this.params)
      this.data = [];
      getList(data).then(res => {
        const data = res.data.data
        this.loading = false;
        this.page.total = data.total;
        const result = data.list;
        this.data = result;
      })
    },
    rowSave (row, done, loading) {
      add(Object.assign({
        createUser: this.userInfo.name
      }, row)).then(() => {
        this.$message.success('新增成功')
        done();
        this.getList();
      }).catch(() => {
        loading()
      })
    },
    rowUpdate (row, index, done, loading) {
      update(Object.assign({
        updateUser: this.userInfo.name
      }, row)).then(() => {
        this.$message.success('修改成功')
        done()
        this.getList();
      }).catch(() => {
        loading()
      })
    },
    rowDel (row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return del(row.id)
      }).then(() => {
        this.$message.success('删除成功')
        this.getList();
      })
    },
    searchChange (params, done) {
      if (done) done();
      this.params = params;
      this.page.currentPage = 1;
      this.getList();
      this.$message.success('搜索成功')
    },
    refreshChange () {
      this.getList();
      this.$message.success('刷新成功')
    }
  }
}
</script>

</script>