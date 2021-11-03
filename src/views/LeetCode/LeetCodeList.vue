<template>
  <div class>
    <a-table :columns="columns" :data="tableData" :pagination="false" @row-click="seeDetal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const columns = [
  { title: '题目', dataIndex: 'name' },
  { title: '难度', dataIndex: 'difficulty' }
]
const tableData = ref([])
const getData = async () => {
  const { data } = await axios.get('/static/LeetCodeData/LeetCodeData.json')
  tableData.value = data
}
onMounted(() => {
  getData()
})

const seeDetal = (val) => {
  console.log('val: ', val)
  router.push({ name: 'LeetCodeDetails', query: { path: val.path } })
}
</script>

<style lang="scss" scoped>
</style>
