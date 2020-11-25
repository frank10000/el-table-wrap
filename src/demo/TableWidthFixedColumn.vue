<template>
  <div>
    <h4>demo1</h4>
    <ElTableWrap :data="tableData" :columns="columns" style="width: 100%">
    </ElTableWrap>
    <h4>demo2</h4>
    <ElTableWrap :data="tableData" :columns="columns1" style="width: 100%">
    </ElTableWrap>
  </div>
</template>

<script>
export default {
  name: 'TableWidthFixedColumn',
  methods: {
    handleClick() {
      console.log('click999')
    },
  },
  data() {
    return {
      columns: [
        { prop: 'date', label: 'Date', fixed: true, width: '300px' },
        { prop: 'name', label: 'Name', fixed: true, width: '200px' },
        { prop: 'state', label: 'state', width: '300px' },
        { prop: 'city', label: 'city', width: '300px' },
        { prop: 'address', label: 'Address', width: '300px' },
        { prop: 'zip', label: 'zip', width: '300px' },
        {
          prop: 'right',
          label: 'Operations',
          fixed: 'right',
          width: '300px',
          render: () => {
            return (
              <div>
                <el-button
                  onClick={this.handleClick.bind(this)}
                  type="text"
                  size="small"
                >
                  Detail
                </el-button>
                <el-button type="text" size="small">
                  Edit
                </el-button>
              </div>
            )
          },
        },
      ],
      columns1: [
        {
          prop: 'date',
          label: 'Date',
          config: { fixed: true, width: '300px' },
        },
        {
          prop: 'name',
          label: 'Name',
          config: { fixed: true, width: '300px' },
        },
        {
          prop: 'state',
          label: 'state',
          config: { width: '300px' },
        },
        {
          prop: 'city',
          label: 'city',
          config: { width: '300px' },
        },
        {
          prop: 'address',
          label: 'Address',
          config: { width: '300px' },
        },
        { prop: 'zip', label: 'zip', config: { width: '300px' } },
        {
          prop: 'right',
          label: 'Operations',
          render: () => {
            return (
              <div>
                <el-button
                  onClick={this.handleClick.bind(this)}
                  type="text"
                  size="small"
                >
                  Detail
                </el-button>
                <el-button type="text" size="small">
                  Edit
                </el-button>
              </div>
            )
          },
          config: { fixed: 'right', width: '300px' },
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office',
        },
      ],
    }
  },
}
</script>
