<script setup lang="ts">
defineOptions({name: 'LayoutOutput'})
const $route = useRoute()
</script>

<template>
  <router-view v-slot="{Component}">
    <keep-alive :include="[]">
      <component :is="Component" :key="$route.name" />
    </keep-alive>
  </router-view>
</template>
