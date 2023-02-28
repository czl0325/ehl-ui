import EDigitalPanel from "./src/index.vue"
import { App } from "vue"

EDigitalPanel.install = (app: App) => {
  app.component(EDigitalPanel.name, EDigitalPanel)
}

export default EDigitalPanel
