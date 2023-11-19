<script setup lang="ts">
import NavBar from './NavBar.vue'
import Output from './Output.vue'
</script>

<template>
  <NavBar></NavBar>
  <div class="h-[calc(100vh-65px-45px-35px)] p-10px">
    <ACard bordered hoverable class="no-scrollbar h-full overflow-y-auto" title="{title}">
      <Output></Output>
    </ACard>
  </div>
</template>
