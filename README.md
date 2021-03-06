# el-table-wrap

## install
```
npm i el-table-wrap
```

## after use elementUi
```javascript
import elTableWrap from 'el-table-wrap' 
Vue.use(elTableWrap);
```

### dependence

- `Vue2.0+`    
- `Element-UI2.0+`

### demo 
``` html
<div id="app">
  <h3>例1</h3>
  <demo :data="tableData" :columns="columns" style="width: 100%"></demo>
  <h3>例2</h3>
  <demo stripe :data="tableData" :columns="columns" style="width: 100%"></demo>
  <h3>例3</h3>
  <demo border :data="tableData" :columns="columns" style="width: 100%"></demo>
  <h3>例4</h3>
  <demo
    border
    :data="tableData1"
    :columns="columns1"
    style="width: 100%"
  ></demo>
</div>
<script>
  new Vue({
    components: {
      demo: ElTableWrap,
    },
    data: {
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
      columns1: [
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
      tableData1: [
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
    },
  }).$mount('#app')
</script>
```

