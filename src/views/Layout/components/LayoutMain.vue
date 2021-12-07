<template>
  <router-view v-slot="{ Component }">
    <transition name="pageTransition" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
