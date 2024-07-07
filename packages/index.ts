import './less/global.less';
import {
  dateFormat,
  formatNumber,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  toggleDark,
  useEventListener,
  useScrollDirection,
  useFps,
} from './utils';
import type { App } from 'vue';
import Button from './button';
import ThemeProvider from './themeProvider';
import Test from './test';
import TreeNodes from './TreeNodes';
// 所有组件列表
const components = [Button, ThemeProvider, Test, TreeNodes];

// 定义 install 方法
const install = function (app: App) {
  // 遍历注册所有组件
  /*
    component.__name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(<string>component.__name) 或 as语法(component.__name as string)
  */
  components.forEach((component) => {
    console.log('[ component ] >', component);
    return app.component(component.name as string, component);
  });
};

export {
  dateFormat,
  formatNumber,
  rafTimeout,
  cancelRaf,
  throttle,
  debounce,
  add,
  downloadFile,
  toggleDark,
  useEventListener,
  useScrollDirection,
  useFps,
};
export { Button, ThemeProvider };

export default {
  install,
};
