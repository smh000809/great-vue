<script setup lang="ts">
import Header from './Header.vue'
import Sider from './Sider.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'
</script>

<template>
  <ALayout class="min-w-1160px">
    <ALayoutHeader class="!p-0">
      <Header />
    </ALayoutHeader>
    <ALayout class="h-[calc(100vh-62px-45px)]">
      <ALayoutSider :width="215" :collapsed="false" :collapsedWidth="70">
        <Sider />
      </ALayoutSider>
      <ADivider type="vertical" class="m-0 ms-0 h-full" />
      <ALayoutContent class="p-10px">
        <Content />
      </ALayoutContent>
    </ALayout>
    <ALayoutFooter class="l-h-45px !p-0">
      <Footer />
    </ALayoutFooter>
  </ALayout>
</template>
