import EPie from "./src/index.vue"
import { App } from "vue"

EPie.install = (app: App) => {
  app.component(EPie.name, EPie)
}

export default EPie
