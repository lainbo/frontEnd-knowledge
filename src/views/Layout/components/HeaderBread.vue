<template>
  <a-breadcrumb :style="{ margin: '16px 0' }">
    <a-breadcrumb-item v-for="(item, index) in textArr" :key="index">{{ item }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
const route = useRoute()
const textArr = computed(() => {
  return route.matched.map(i => i.meta.title)
})

</script>

<style lang="scss" scoped>
</style>
