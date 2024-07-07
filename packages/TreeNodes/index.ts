import type { App } from 'vue';
import TreeNodes from './TreeNodes.vue';

// 使用install方法，在app.use挂载
TreeNodes.install = (app: App) => {
  app.component(TreeNodes.name as string, TreeNodes);
};

export default TreeNodes;
