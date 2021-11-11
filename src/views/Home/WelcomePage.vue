<template>
  <div>
    <lottie :height="500" :options="defaultOptions" :defaultSlot="false" ref="lottie" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Lottie from '~@comp/LottieItem.vue'
import data from '~@assets/lottieData/HomeFlower.json'
const defaultOptions = ref({
  loop: false,
  animationData: data
})
</script>

<style lang="scss" scoped>
</style>
