<template>
  <div>
    <el-table v-bind="$attrs" v-on="$listeners">
      <ElTableWrapColumn
        v-for="item in columns"
        :key="item.key || item.prop"
        :column="item"
      />
    </el-table>
  </div>
</template>
<script>
import ElTableWrapColumn from './ElTableWrapColumn'
export default {
  name: 'ElTableWrap',
  inheritAttrs: false,
  components: {
    ElTableWrapColumn,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
