<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
