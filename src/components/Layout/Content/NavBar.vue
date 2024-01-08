<script setup lang="ts">
import {theme} from 'ant-design-vue'
defineOptions({name: 'LayoutNavBar'})
const {useToken} = theme
const {token} = useToken()
const bgStyle = computed(() => ({background: token.value.colorBgBase}))
</script>

<template>
  <div class="h-34px" :style="bgStyle"></div>
  <ADivider class="m-0" />
</template>
