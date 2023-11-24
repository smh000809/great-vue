<script setup lang="ts">
import Header from './Header/index.vue'
import Sider from './Sider/index.vue'
import Footer from './Footer/index.vue'
import Content from './Content/index.vue'
</script>

<template>
  <ALayout class="min-w-1160px pb-1px">
    <ALayoutHeader class="!h-65px !p-0">
      <Header></Header>
    </ALayoutHeader>
    <ALayout class="h-[calc(100vh-66px-45px)]">
      <ALayoutSider :width="215" :collapsed="false" :collapsedWidth="70">
        <Sider></Sider>
      </ALayoutSider>
      <ADivider type="vertical" class="m-0 ms-0 h-full" />
      <ALayoutContent>
        <Content></Content>
      </ALayoutContent>
    </ALayout>
    <ALayoutFooter class="lhh-45px !p-0">
      <Footer></Footer>
    </ALayoutFooter>
  </ALayout>
</template>
