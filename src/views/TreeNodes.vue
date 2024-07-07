<template>
  <div>
    <h1>{{ $route.name }} {{ $route.meta.title }}</h1>
    <div class="demo-tree-nodes-wrap">
      <ns-tree-nodes >Default Button Default Button</ns-tree-nodes>
    </div>
  </div>
</template>

<style scoped lang="less">
.demo-tree-nodes-wrap {
  display: flex;
  gap: 10px;
}
</style>
