<template>
  <ElTableWrap
    :row-class-name="tableRowClassName"
    :data="tableData"
    :columns="columns"
    style="width: 100%"
  >
  </ElTableWrap>
</template>

<script>
export default {
  name: 'TableWithStatus',
  data() {
    return {
      columns: [
        { prop: 'date', label: 'Date' },
        { prop: 'name', label: 'Name' },
        { prop: 'address', label: 'Address' },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    }
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
  },
}
</script>
<style lang="scss">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
