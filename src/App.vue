<script setup lang="ts">
import {theme} from '@/utils/theme'
</script>

<template>
  <AConfigProvider :theme="theme">
    <AApp>
      <RouterView></RouterView>
    </AApp>
  </AConfigProvider>
</template>
