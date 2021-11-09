<template>
  <a-layout class="layout-d">
    <a-layout-sider>
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="logo" />
          <AsideMenu />
        </div>
        <lottie :height="200" :options="defaultOptions" :defaultSlot="false" ref="lottie" />
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app_header" style="padding-left: 20px;">
        <HeaderBread />
      </a-layout-header>
      <a-layout class="h-[calc(100vh-64px)] overflow-y-auto p-24px pb-0">
        <a-layout-content>
          <LayoutMain />
        </a-layout-content>
        <LayoutFooter />

      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import HeaderBread from './components/HeaderBread.vue'
import LayoutMain from './components/LayoutMain.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import AsideMenu from './components/AsideMenu.vue'
import { ref } from '@vue/reactivity'
import Lottie from '~@comp/LottieItem.vue'
import data from '~@assets/lottieData/Sunflower.json'
const defaultOptions = ref({
  animationData: data
})
// import { IconCaretRight, IconCaretLeft } from '@arco-design/web-vue/es/icon'

</script>
<style scoped>
.app_header {
  box-shadow: 0 1px 4px #0015291f;
  z-index: 2000;
}
.layout-d {
  height: 100vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}
.layout-d :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-d :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout-d :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout-d :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout-d :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
  border-radius: 8px;
  padding: 10px;
}
.layout-d :deep(.arco-layout-footer),
.layout-d :deep(.arco-layout-content) {
  font-size: 16px;
}
</style>
