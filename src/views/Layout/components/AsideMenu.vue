<template>
  <a-menu :defaultSelectedKeys="[defaultSelect]" @menuItemClick="onClickMenuItem">
    <a-menu-item key="knowledge">
      <IconHome />
      <span>前端知识整理</span>
    </a-menu-item>
    <a-menu-item key="leetcode-list">
      <IconCalendar />
      <span>LeetCode练习</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const defaultSelect = ref(undefined)
const onClickMenuItem = (key) => {
  router.push({ path: key })
}
onMounted(() => {
  const path = route.path.substring(1, route.path.length)
  defaultSelect.value = path
})
</script>

<style lang="scss" scoped>
</style>
