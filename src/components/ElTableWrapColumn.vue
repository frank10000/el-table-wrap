<template>
  <!--表头分组的父级-->
  <el-table-column v-if="column.children" :label="column.label">
    <ElTableWrapColumn
      v-for="item in column.children"
      :key="item.key || item.prop"
      :column="item"
    />
  </el-table-column>
  <!--列有自定义渲染-->
  <el-table-column
    v-else-if="column.render"
    width="300px"
    :prop="column.prop"
    :label="column.label"
    v-bind="columnConfig"
  >
    <template slot-scope="scope">
      <ColumnSlot :render="column.render" :scope="scope" :column="column" />
    </template>
  </el-table-column>
  <!--默认渲染-->
  <el-table-column
    v-else
    :prop="column.prop"
    :label="column.label"
    v-bind="columnConfig"
  >
  </el-table-column>
</template>

<script>
export default {
  name: 'ElTableWrapColumn',
  props: {
    column: { type: Object, default: () => ({}) },
  },
  components: {
    ColumnSlot: {
      functional: true,
      props: {
        render: {
          type: Function,
          required: true,
        },
        scope: {
          type: Object,
          default: () => ({}),
        },
        column: {
          type: Object,
          required: true,
        },
      },
      render(h, ctx) {
        return ctx.props.render(h, ctx.props.scope, ctx.props.column)
      },
    },
  },
  computed: {
    columnConfig() {
      if (this.column.config) {
        //在column对象的config上添加el-table-column配置
        return this.column.config
      }
      const obj = {} //在column对象上直接添加el-table-column配置
      const keys = Object.keys(this.column)
      for (let key of keys) {
        // 排除后则为el-table-column所配置的属性
        if (['key', 'prop', 'label', 'children'].indexOf(key) !== -1) continue
        else obj[key] = this.column[key]
      }
      return obj
    },
  },
}
</script>

<style></style>
