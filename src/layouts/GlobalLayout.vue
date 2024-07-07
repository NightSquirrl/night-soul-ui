
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router'
import { toggleDark } from 'packages'

const route = useRoute() // 返回当前路由地址，相当于在模板中使用$route
// const router = useRouter() // 返回router实例，相当于在模板中使用$router

const showDuty = ref(false)
const themeDark = ref()
const observer = ref()

onMounted(() => {
  // 观察器的配置（需要观察什么变动）
  const config = { attributes: true, childList: false, subtree: false }
  // 创建一个观察器实例并传入回调函数
  observer.value = new MutationObserver(callback)
  // 以上述配置开始观察目标节点
  observer.value.observe(document.documentElement, config)
  themeDark.value = document.documentElement.classList.contains('dark')
  if (!themeDark.value) {
    // 默认开启暗黑模式
    toggleDark()
  }
})
// 当观察到变动时执行的回调函数
const callback = function () {
  themeDark.value = document.documentElement.classList.contains('dark')
}
function onThemeChange() {
  toggleDark()
}
// function toggleDark () {
//   // 如果 dark 类值已存在，则移除它，否则添加它
//   document.documentElement.classList.toggle('dark')
// }
const menus = ref(routes[0].children)
const current = ref([route.name])
function onClick(e: any): void {
  console.log(`${e.item.title} ${e.key}`)
  // console.log(e.keyPath)
}
function onFinish() {
  console.log('Off Duty！')
}
const getOffDate = (time = '9:00'): number => {
  const date = new Date()
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  return new Date(`${Y} ${M} ${D} ${time}`).getTime() + 9 * 60 * 60 * 1000
}
const countdown = computed(() => {
  return getOffDate()
})
const routerViewRef = ref()
</script>
<template>
  <a-row style="width: 100%">
    <a-col :xs="5" :xl="4" style="position: relative">
      <a-menu
        class="m-menus"
        v-model:selectedKeys="current"
        mode="inline"
        :theme="themeDark ? 'dark' : 'light'"
        @click="onClick"
      >
        <a-menu-item v-for="menu in menus" :key="menu.name" :title="menu.meta.title">
          <router-link :to="menu.path">{{ menu.meta.title }} {{ menu.name }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :xs="19" :xl="20">
      <div class="router-view" ref="routerViewRef">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </a-col>
  </a-row>
</template>
<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.u-duty-switch {
  position: fixed;
  top: 36px;
  right: 36px;
  z-index: 3;
  :deep(.switch-checked) {
    background: #faad14 !important;
    &:hover {
      background: #e8b339 !important;
    }
  }
}
.u-duty-countdown {
  position: fixed;
  top: 36px;
  right: 36px;
  z-index: 2;
}
.u-theme-switch {
  position: absolute;
  top: 13px;
  right: 13px;
  z-index: 3;
  :deep(.switch-checked) {
    background: #faad14 !important;
    &:hover {
      background: #e8b339 !important;
    }
  }
}
.u-dark-svg {
  width: 12px;
  height: 12px;
  fill: #fff;
}
.u-light-svg {
  width: 12px;
  height: 12px;
  fill: rgba(60, 60, 67, 0.75);
}
.m-menus {
  overflow-y: auto;
  height: 100vh;
}
.router-view {
  padding: 36px;
  overflow-y: auto;
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
