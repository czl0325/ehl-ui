import EPanelTitle from "./src"
import { App } from "@vue/runtime-core"

EPanelTitle.install = (app: App) => {
  app.component(EPanelTitle.name, EPanelTitle)
}

export default EPanelTitle
