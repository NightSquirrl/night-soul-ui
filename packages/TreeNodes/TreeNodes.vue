<template>
  <div class="ns-tree-nodes">
    <TreeNode v-for="treeNodeData in treeNodesData" :key="treeNodeData.id" :treeNodeData="treeNodeData" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ns-tree-nodes',
};
</script>
<script setup lang="ts">
import { uuid } from '../utils';
import TreeNode from './TreeNode.vue';

interface Props {
  treeNodesData?: globalThis.ITreeNodesData[];
}
const props = withDefaults(defineProps<Props>(), {
  treeNodesData: () => [
    { name: '第1层', id: uuid(), children: [{ name: '第1-1层', id: uuid(), children: [] }] },
    { name: '第二层', id: uuid(), children: [] },
    { name: '第三层', id: uuid(), children: [] },
  ],
});
</script>
<style lang="less" scoped></style>
