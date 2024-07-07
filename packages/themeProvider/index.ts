import type { App } from 'vue'
import ThemeProvide from './ThemeProvider.vue'

// 使用install方法，在app.use挂载
ThemeProvide.install = (app: App) => {
  app.component(ThemeProvide.name as string, ThemeProvide)
}

export default ThemeProvide
