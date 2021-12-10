<template>
  <div class="table_wrapper customer_card">
    <a-table :data="tableData" :pagination="false" @row-click="seeDetal">
      <template #columns>
        <a-table-column title="序号" data-index="num" width="80" />
        <a-table-column title="题目" data-index="name" />
        <a-table-column title="难度" data-index="difficulty" width="100" align="center">
          <template #cell="{ record }">
            <a-tag :color="calcDifficulty(record)" size="small">{{ record.difficulty }}</a-tag>
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

const router = useRouter()
const tableData = ref([]) // 表格数据
const getData = async () => { // 获取表格数据
  const OneToNinetyNineFilesArr = Object.keys(import.meta.glob('../../../static/markdown/001-099/*.md') || {})
  const allFilse = [...OneToNinetyNineFilesArr] // 所有的文件列表
  const resultArr = [] // 最终赋值给表格的数组

  allFilse.forEach(i => {
    // 文件名，切去.md后缀后，由 序号-文件名-难度 生成的数组
    const fileInfoArr = i.substring(i.lastIndexOf('/') + 1, i.length - 3).split('-')
    const obj = {
      // path是从倒数第二个 ”/“ 截取的后面所有的
      path: i.substring(i.lastIndexOf('/', i.lastIndexOf('/') - 1)),
      num: parseInt(fileInfoArr[0]),
      name: fileInfoArr[1],
      difficulty: fileInfoArr[2]
    }
    resultArr.push(obj)
  })

  tableData.value = resultArr
}
onMounted(getData)

const seeDetal = (val) => { // 跳转去详情
  router.push({ name: 'LeetCodeDetails', query: { path: val.path } })
}
const calcDifficulty = (row) => { // 返回文字颜色
  const m = new Map([
    ['简单', 'green'],
    ['中等', 'orangered'],
    ['困难', 'red']
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
