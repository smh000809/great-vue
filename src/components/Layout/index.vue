<script setup lang="ts">
import { computed, ref, KeepAlive } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Layout, LayoutHeader, LayoutSider, Divider, LayoutContent, LayoutFooter, Flex, theme, Card, Space, Button, Avatar } from 'ant-design-vue'
import { useConfigStore } from '@/stores/config'

defineOptions({ name: 'Layout' })
const $route = useRoute()
const config = useConfigStore()
const { themeTag } = storeToRefs(config)
const { useToken } = theme
const { token } = useToken()
const styles = computed(() => ({ background: token.value.colorBgBase }))
const defineAppVersion = ref(__APP_VERSION__)
</script>

<template>
  <Layout class="min-w-1160px pb-1px">
    <LayoutHeader class="!h-65px !p-0">
      <Flex align="center" justify="space-between" class="h-64px p-10px">
        <Space align="center">
          <Flex align="center" justify="flex-start">
            <!-- <AImage :preview="false" class="!h-45px" /> -->
          </Flex>
        </Space>
        <Space align="center">
          <Flex align="center" justify="center">
            <Button shape="circle" @click="config.toggleThemeTag" :type="themeTag === 'dark' ? 'primary' : 'default'">
              <template #icon>
                <i class="i-ri:moon-line text-18px -mt-4px"></i>
              </template>
            </Button>
          </Flex>
          <Flex align="center" justify="center">
            <Avatar :draggable="false" :size="32">
              <template #icon>
                <i class="i-ant-design:user-outlined text-18px -mt-4px"></i>
              </template>
            </Avatar>
          </Flex>
        </Space>
      </Flex>
      <Divider class="m-0" />
    </LayoutHeader>
    <Layout class="h-[calc(100vh-66px-45px)]">
      <LayoutSider :width="215" :collapsed="false" :collapsedWidth="70">
        <div>Sideber</div>
      </LayoutSider>
      <Divider type="vertical" class="m-0 ms-0 h-full" />
      <LayoutContent>
        <div class="h-34px" :style="styles"></div>
        <Divider class="m-0" />
        <div class="no-scrollbar max-h-[calc(100vh-65px-45px-35px)] overflow-y-auto p-15px">
          <Card bordered hoverable class="h-full" title="{title}">
            <RouterView v-slot="{ Component }">
              <KeepAlive :include="[]">
                <component :is="Component" :key="$route.name" />
              </KeepAlive>
            </RouterView>
          </Card>
        </div>
      </LayoutContent>
    </Layout>
    <LayoutFooter class="lhh-45px !p-0">
      <Divider class="m-0" />
      <Flex align="center" :style="styles" justify="center" class="h-44px p-10px">{{ defineAppVersion }}</Flex>
    </LayoutFooter>
  </Layout>
</template>
