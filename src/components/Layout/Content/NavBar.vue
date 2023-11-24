<script setup lang="ts">
import {theme} from 'ant-design-vue'
import type {GlobalToken} from 'ant-design-vue/es/theme/interface/index'
const {useToken} = theme
const {token} = useToken()
const navBarStyle = computed(() => ({
  background: token.value.colorBgBase
}))
</script>

<template>
  <div class="h-34px" :style="navBarStyle"></div>
  <ADivider class="m-0" />
</template>
