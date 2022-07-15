import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import { EPanelTitle } from "./components/index"

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
//@ts-ignore
app.use(EPanelTitle)
app.mount('#app')
