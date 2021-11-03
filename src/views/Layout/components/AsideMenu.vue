<template>
  <a-menu
    :defaultOpenKeys="['1']"
    :defaultSelectedKeys="['0_3']"
    :style="{ width: '100%' }"
    @menuItemClick="onClickMenuItem"
  >
    <a-menu-item key="KnowLedgeList">
      <IconHome />
      <span>前端知识整理</span>
    </a-menu-item>
    <a-menu-item key="LeetCodeList">
      <IconCalendar />
      <span>LeetCode练习</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon'
import { useRouter } from 'vue-router'
const router = useRouter()
const onClickMenuItem = (key) => {
  router.push({ name: key })
}
</script>

<style lang="scss" scoped>
</style>
