<template>
  <div class="home">
    <div>
      <h2>demo as el-table official</h2>
    </div>
    <div>
      <h3>Basic Table</h3>
      <BasicTable />
    </div>
    <div>
      <h3>Stripe Table</h3>
      <StripTable />
    </div>
    <div>
      <h3>Table Border</h3>
      <TableBorder />
    </div>
    <div>
      <h3>Table Width Status</h3>
      <TableWithStatus />
    </div>
    <div>
      <h3>Table Width Fixed Header</h3>
      <TableWithFixedHeader />
    </div>
    <div>
      <h3>Table with fixed column</h3>
      <TableWidthFixedColumn />
    </div>
    <div>
      <h3>Table with fixed column and Header</h3>
      <TableWithFixedColumnAndHeader />
    </div>
    <div>
      <h3>fluid Table</h3>
      <TableWithFixedColumnAndHeader />
    </div>
    <div>
      <h3>Group Table</h3>
      <GroupTableHeader />
    </div>
  </div>
</template>

<script>
import BasicTable from '@/demo/BasicTable'
import StripTable from '@/demo/StripeTable'
import TableBorder from '@/demo/TableWithFixedColumnAndHeader'
import TableWithStatus from '@/demo/TableWithStatus'
import TableWithFixedHeader from '@/demo/TableWithFixedHeader'
import TableWidthFixedColumn from '@/demo/TableWidthFixedColumn'
import TableWithFixedColumnAndHeader from '@/demo/TableWithFixedColumnAndHeader'
import GroupTableHeader from '@/demo/GroupingTableHeader'
export default {
  name: 'Home',
  components: {
    BasicTable,
    StripTable,
    TableBorder,
    TableWithStatus,
    TableWithFixedHeader,
    TableWidthFixedColumn,
    TableWithFixedColumnAndHeader,
    GroupTableHeader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.home {
  padding: 20px;
}
</style>
