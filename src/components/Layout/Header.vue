<script setup lang="ts">
import appLogo from '@/assets/app-logo.jpeg'
</script>

<template>
  <a-flex align="center" justify="space-between" class="h-63px p-10px">
    <ASpace>
      <AFlex align="center" justify="flex-start">
        <AImage :src="appLogo" :preview="false" class="!h-45px" />
      </AFlex>
    </ASpace>
    <ASpace>
      <AAvatar :draggable="false" :size="32">
        <template #icon>
          <i class="i-ant-design:user-outlined text-20px"></i>
        </template>
      </AAvatar>
    </ASpace>
  </a-flex>
  <ADivider class="m-0" />
</template>
