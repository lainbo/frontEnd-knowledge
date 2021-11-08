<template>
  <div>
    <v-md-preview :text="articleContent"></v-md-preview>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const articleContent = ref('') // 文章内容
const getData = async (query) => { // 获取文章内容
  const { data } = await axios.get(`/static/markdown${query.path}`)
  articleContent.value = data
}
onMounted(() => {
  const query = route.query
  query && getData(query)
})
</script>

<style lang="scss" scoped>
</style>
