<template>
  <div class="table_wrapper">
    <a-table :data="tableData" :pagination="false" @row-click="seeDetal">
      <template #columns>
        <a-table-column title="序号" dataIndex="num" width="80" />
        <a-table-column title="题目" dataIndex="name" />
        <a-table-column title="难度" dataIndex="difficulty" width="100">
          <template #cell="{ record }">
            <span :style="{color:calcDifficulty(record)}">
              {{record.difficulty}}
            </span>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const tableData = ref([]) // 表格数据
const getData = async () => { // 获取表格数据
  const { data } = await axios.get('/static/LeetCodeData/LeetCodeData.json')
  tableData.value = data
}
onMounted(() => {
  getData()
})

const seeDetal = (val) => { // 跳转去详情
  router.push({ name: 'LeetCodeDetails', query: { path: val.path } })
}
const calcDifficulty = (row) => { // 返回文字颜色
  const m = new Map([
    ['简单', '#00b42a'],
    ['中等', '#ff7d00'],
    ['困难', '#f53f3f']
  ])
  return m.get(row.difficulty) || '#333'
}
</script>

<style lang="scss" scoped>
.table_wrapper {
  ::v-deep(.arco-table-tr) {
    cursor: pointer;
  }
}
</style>
