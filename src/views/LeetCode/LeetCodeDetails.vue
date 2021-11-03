<template>
  <div>
    <v-md-preview :text="articleContent"></v-md-preview>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
const route = useRoute()
const articleContent = ref('')
const getData = async (query) => {
  const { data } = await axios.get(`/static/markdown${query.path}`)
  articleContent.value = data
}
onMounted(() => {
  const query = route.query
  getData(query)
})
</script>

<style lang="scss" scoped>
</style>
