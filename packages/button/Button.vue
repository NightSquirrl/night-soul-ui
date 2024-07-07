<template>
  <div class="ns-button" :class="['button-' + type]" :style="{ ...buttonStyle }" tabindex="0">
    <a :class="[{ center }]" :href="href ? href : 'javascript:;'" :target="href ? target : '_self'" @click="onClick">
      <span :class="[{ loading }]">
        <span></span>
      </span>
      <span v-if="!loading || type !== 'circle'">
        <slot>{{ name }}</slot>
      </span>
    </a>
  </div>
</template>

<script lang="ts">
export default {
    name: "ns-button",
};
</script>
<script setup lang="ts">
import { inject, type Ref } from 'vue';

interface Props {
  name?: string; // 按钮文本 string | slot
  type?: 'default' | 'circle'; // 按钮类型
  href?: string; // 点击跳转的地址，与 a 链接的 href 属性一致
  target?: '_self' | '_blank'; // 相当于 a 链接的 target 属性，href 存在时生效
  disabled?: boolean; // 是否禁用
  loading?: boolean; // 是否加载中
  center?: boolean; // 是否将按钮宽度调整为其父宽度并居中展示
  backgroundColor?: string; // 按钮背景色
  radius?: string;
  loadingSize?: string;
  color?: string;
  padding?: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: '按钮',
  type: 'default',
  size: 'middle',
  href: '',
  target: '_self',
  disabled: false,
  loading: false,
  center: true,
  backgroundColor: '',
  radius: '5px',
  loadingSize: '14px',
  padding: '10 10px',
});
const emit = defineEmits(['click']);
function onClick(e: Event) {
  emit('click', e);
}

// inject 指定类型
const themeProvider = inject<Ref<globalThis.IThemeProvider>>('themeProvider');
const buttonStyle = {
  'background-color': props.backgroundColor ?? themeProvider?.value?.button?.backgroundColor,
  'border-radius': props.type === 'circle' ? '50%' : props.radius,
  '--loading-size': props.loadingSize,
  '--primary-text-color': props.color ?? themeProvider?.value?.button?.color,
  '--button-padding': props.padding,
};
</script>
<style lang="less" scoped>
@import '../less/global.less';

@danger: #ff4d4f;
.ns-button {
  padding: 10px 10px;
  width: fit-content;
  height: 50px;
  background-color: @themeColor;
  a {
    color: @primary-text-color;
    height: 100%;
    gap: 10px;
  }
}
.button-circle {
  width: 50px;
  height: 50px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-flex;
  align-items: center;
  text-align: left;
  opacity: 1;
  width: var(--loading-size);
  height: var(--loading-size);
  transition:
    width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  & span {
    width: var(--loading-size);
    height: var(--loading-size);
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-top-color: inherit; // 显示1/4圆
    animation: loadingCircle 1s infinite linear;
    -webkit-animation: loadingCircle 1s infinite linear;
  }
}
@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
</style>
