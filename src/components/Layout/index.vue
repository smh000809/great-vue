<script setup lang="ts">
import { computed, ref, KeepAlive } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ATheme } from '@/utils/theme'
import { useConfigStore } from '@/stores/config'

defineOptions({ name: 'Layout' })
const $route = useRoute()
const config = useConfigStore()
const { themeTag } = storeToRefs(config)
const { useToken } = ATheme
const { token } = useToken()
const styles = computed(() => ({ background: token.value.colorBgBase }))
const defineAppVersion = ref(__APP_VERSION__)
</script>

<template>
  <ALayout class="min-w-1160px pb-1px">
    <ALayoutHeader class="!h-65px !p-0">
      <AFlex align="center" justify="space-between" class="h-64px p-10px">
        <ASpace align="center">
          <AFlex align="center" justify="flex-start">
            <!-- <AImage :preview="false" class="!h-45px" /> -->
          </AFlex>
        </ASpace>
        <ASpace align="center">
          <AFlex align="center" justify="center">
            <AButton shape="circle" @click="config.toggleThemeTag" :type="themeTag === 'dark' ? 'primary' : 'default'">
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
    </ALayoutHeader>
    <ALayout class="h-[calc(100vh-66px-45px)]">
      <ALayoutSider :width="215" :collapsed="false" :collapsedWidth="70">
        <div>Sideber</div>
      </ALayoutSider>
      <ADivider type="vertical" class="m-0 ms-0 h-full" />
      <ALayoutContent>
        <div class="h-34px" :style="styles"></div>
        <ADivider class="m-0" />
        <div class="no-scrollbar max-h-[calc(100vh-65px-45px-35px)] overflow-y-auto p-15px">
          <ACard bordered hoverable class="h-full" title="{title}">
            <RouterView v-slot="{ Component }">
              <KeepAlive :include="[]">
                <component :is="Component" :key="$route.name" />
              </KeepAlive>
            </RouterView>
          </ACard>
        </div>
      </ALayoutContent>
    </ALayout>
    <ALayoutFooter class="lhh-45px !p-0">
      <ADivider class="m-0" />
      <AFlex align="center" :style="styles" justify="center" class="h-44px p-10px">{{ defineAppVersion }}</AFlex>
    </ALayoutFooter>
  </ALayout>
</template>
