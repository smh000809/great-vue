<script setup lang="ts">
import NavBar from './NavBar.vue'
import Output from './Output.vue'
defineOptions({name: 'LayoutContent'})
</script>

<template>
  <NavBar></NavBar>
  <div class="no-scrollbar max-h-[calc(100vh-65px-45px-35px)] overflow-y-auto p-15px">
    <ACard bordered hoverable class="h-full" title="{title}">
      <Output></Output>
    </ACard>
  </div>
</template>
