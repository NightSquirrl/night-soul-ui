<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ns-theme-provider',
};
</script>
<script setup lang="ts">
import { provide, ref } from 'vue';

const themeProvide = ref<globalThis.IThemeProvider>({
  button: {
    backgroundColor: '',
    color: '',
    borderRadius: '',
  },
});
provide('themeProvider', themeProvide);
</script>
