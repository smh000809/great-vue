<script setup lang="ts">
const defineAppVersion = ref(__APP_VERSION__)
</script>

<template>
  <ADivider class="m-0" />
  <AFlex align="center" justify="center" class="h-44px p-10px">{{ defineAppVersion }}</AFlex>
</template>
