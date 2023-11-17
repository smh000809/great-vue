<script setup lang="ts">
console.log(import.meta.env)
</script>

<template>
  <AWatermark :content="['Ant Design Vue', 'Happy Working']">
    <div class="h-500px" />
  </AWatermark>
</template>
