<script setup lang="ts">
import { ref } from 'vue'
function onClick(e: Event) {
  console.log('click', e)
}
</script>
<template>
  <div>
    <h1>{{ $route.name }} {{ $route.meta.title }}</h1>
    <div class="demo-button-wrap">
      <ns-button loading radius="10px" loadingSize="30px" color="red">Default Button Default Button</ns-button>
      <ns-button loading radius="10px" loadingSize="30px">Default Button</ns-button>
      <ns-button loading type="circle">Default Button</ns-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.demo-button-wrap {
  display: flex;
  gap: 10px;
}
</style>
