<template>
  <ElTableWrap :data="tableData" :columns="columns" style="width: 100%">
  </ElTableWrap>
</template>

<script>
export default {
  name: 'GroupingTableHeader',
  data() {
    return {
      columns: [
        { prop: 'date', label: 'Date' },
        {
          label: 'Delivery Info',
          children: [
            { prop: 'name', label: 'Name', width: '120px' },
            {
              label: 'Address Info',
              children: [
                { prop: 'state', label: 'state', width: '120px' },
                { prop: 'city', label: 'City', width: '120px' },
                { prop: 'address', label: 'Address', width: '300px' },
                { prop: 'zip', label: 'Zip', width: '240px' },
              ],
            },
          ],
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
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ],
    }
  },
}
</script>
