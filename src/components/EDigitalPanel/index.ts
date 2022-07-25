import EDigitalPanel from "./src/index.vue"
import { App } from "@vue/runtime-core"

EDigitalPanel.install = (app: App) => {
  app.component(EDigitalPanel.name, EDigitalPanel)
}

export default EDigitalPanel
