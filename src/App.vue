<script setup lang="ts">
import { ConfigProvider, App } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import { theme } from '@/utils/theme'
</script>

<template>
  <ConfigProvider :theme="theme">
    <App>
      <RouterView></RouterView>
    </App>
  </ConfigProvider>
</template>
