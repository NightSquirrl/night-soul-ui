<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const theme = ref({
  token: {
    colorPrimary: '#00b96b'
  }
})
const route = useRoute()
</script>
<template>
  <a-config-provider :theme="theme">
    <ns-theme-provider>
      <RouterView />
    </ns-theme-provider>
  </a-config-provider>
</template>
