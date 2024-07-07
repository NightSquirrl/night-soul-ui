import type { App } from 'vue';
import Test from './Test.vue';

// 使用install方法，在app.use挂载
Test.install = (app: App) => {
  app.component(Test.name as string, Test);
};

export default Test;
