<template>
  <div>{{ treeNodeData.name }}</div>
</template>
<script setup lang="ts">
interface IProps {
  treeNodeData: globalThis.ITreeNodesData;
}
defineProps<IProps>();
</script>
<style scoped></style>
