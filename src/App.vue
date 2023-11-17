<script setup lang="ts">
import {App} from 'ant-design-vue'
import {theme} from '@/styles/theme'
console.log(import.meta.env)
</script>

<template>
  <AConfigProvider :theme="theme()">
    <App>
      <RouterView></RouterView>
    </App>
  </AConfigProvider>
</template>
