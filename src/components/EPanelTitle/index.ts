import EPanelTitle from "./src/index.vue"
import { App } from "vue"

EPanelTitle.install = (app: App) => {
  app.component(EPanelTitle.name, EPanelTitle)
}

export default EPanelTitle
