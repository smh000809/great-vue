<script setup lang="ts">
import {theme} from '@/styles/theme'
</script>

<template>
  <AConfigProvider :theme="theme">
    <AApp>
      <RouterView></RouterView>
    </AApp>
  </AConfigProvider>
</template>
