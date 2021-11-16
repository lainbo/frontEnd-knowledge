<template>
  <a-layout class="layout-d">
    <a-layout-sider>
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="logo relative overflow-hidden p-8px cursor-pointer" @click="goHome">
            <lottie class="absolute -left-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/5"
              :height="100" :options="logoDefaultOptions" ref="lottie" />
            <span class="absolute left-75px top-1/2 transform -translate-y-1/2"></span>
          </div>
          <AsideMenu />
        </div>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app_header" style="padding-left: 20px;">
        <HeaderBread />
      </a-layout-header>
      <a-layout id="customer_content" class="h-[calc(100vh-64px)] overflow-y-auto p-24px pb-0">
        <a-layout-content class="!p-0">
          <LayoutMain />
        </a-layout-content>
        <LayoutFooter />
        <a-back-top target-container="#customer_content" :style="{position:'absolute'}" />
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
import logoData from '~@assets/lottieData/LogoData.json'
import Lottie from '~@comp/LottieItem.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const logoDefaultOptions = ref({
  animationData: logoData
})

const goHome = () => {
  router.push({ name: 'WelcomePage' })
}

</script>
<style lang="scss" scoped>
.lottie_wrapper {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to top, #fff0 0%, #fff 100%);
  }
}
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
  height: 64px;
}
// .layout-d :deep(.arco-layout-sider-light) .logo {
//   background: var(--color-fill-2);
// }
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
