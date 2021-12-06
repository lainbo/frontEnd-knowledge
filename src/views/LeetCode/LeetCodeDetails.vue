<template>
  <div id="customer_content" class="relative" ref="detailRef">
    <div @click="goList"
      class="cursor-pointer pl-16px space-x-8px inline-flex items-center leading-40px rounded-l-full absolute right-0 top-22px pr-10px shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl transition-all">
      <icon-left />
      <span class="font-700 text-[#333]">返回列 表</span>
    </div>
    <v-md-preview :text="articleContent"></v-md-preview>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { IconLeft } from '@arco-design/web-vue/es/icon'

const route = useRoute()
const router = useRouter()
const detailRef = ref()
const articleContent = ref('') // 文章内容
const getData = async (query) => { // 获取文章内容
  const { data } = await axios.get(`/static/markdown${query.path}`)
  articleContent.value = data
}
const goList = () => {
  router.push({ name: 'LeetCodeList' })
}
onMounted(() => {
  const query = route.query
  query && getData(query)
})
</script>

<style lang="scss" scoped>
</style>
