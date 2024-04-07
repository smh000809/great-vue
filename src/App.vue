<script setup lang="ts">
import { App } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import { theme } from '@/utils/theme'
</script>

<template>
  <AConfigProvider :theme>
    <App>
      <RouterView />
    </App>
  </AConfigProvider>
</template>
