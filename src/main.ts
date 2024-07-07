import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'less/global.less'

import NightSoul from 'packages'

const app = createApp(App)

app.use(router).use(NightSoul).mount('#app')
