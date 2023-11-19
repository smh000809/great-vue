<script setup lang="ts">
import appLogo from '@/assets/app-logo.jpeg'
import {useConfigStore} from '@/stores/config'

const configStore = useConfigStore()
const {themeTag} = storeToRefs(configStore)
</script>

<template>
  <AFlex align="center" justify="space-between" class="h-64px p-10px">
    <ASpace align="center">
      <AFlex align="center" justify="flex-start">
        <AImage :src="appLogo" :preview="false" class="!h-45px" />
      </AFlex>
    </ASpace>
    <ASpace align="center">
      <AFlex align="center" justify="center">
        <AButton shape="circle" @click="configStore.toggleThemeTag" :type="themeTag === 'dark' ? 'primary' : 'default'">
          <template #icon>
            <i class="i-ri:moon-line text-18px -mt-4px"></i>
          </template>
        </AButton>
      </AFlex>
      <AFlex align="center" justify="center">
        <AAvatar :draggable="false" :size="32">
          <template #icon>
            <i class="i-ant-design:user-outlined text-18px -mt-4px"></i>
          </template>
        </AAvatar>
      </AFlex>
    </ASpace>
  </AFlex>
  <ADivider class="m-0" />
</template>
