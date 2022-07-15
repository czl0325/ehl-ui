import EDialog from "./src"
import { App } from "@vue/runtime-core"

EDialog.install = (app: App) => {
  app.component(EDialog.name, EDialog)
}

export default EDialog
