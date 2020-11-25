<template>
  <ElTableWrap :data="tableData" :columns="columns" style="width: 100%">
  </ElTableWrap>
</template>

<script>
export default {
  name: 'BasicTable',
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
}
</script>
