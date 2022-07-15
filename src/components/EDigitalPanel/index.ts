import EDigitalPanel from "./src"
import { App } from "@vue/runtime-core"

EDigitalPanel.install = (app: App) => {
  app.component(EDigitalPanel.name, EDigitalPanel)
}

export default EDigitalPanel
