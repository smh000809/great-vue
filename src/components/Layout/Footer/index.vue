<script setup lang="ts">
import {theme} from 'ant-design-vue'
defineOptions({name: 'LayoutFooter'})
const {useToken} = theme
const {token} = useToken()
const bgStyle = computed(() => ({background: token.value.colorBgBase}))
const defineAppVersion = ref(__APP_VERSION__)
</script>

<template>
  <ADivider class="m-0" />
  <AFlex align="center" :style="bgStyle" justify="center" class="h-44px p-10px">{{ defineAppVersion }}</AFlex>
</template>
