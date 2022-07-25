import EDialog from "./src/index.vue"
import { App } from "@vue/runtime-core"

EDialog.install = (app: App) => {
  app.component(EDialog.name, EDialog)
}

export default EDialog
