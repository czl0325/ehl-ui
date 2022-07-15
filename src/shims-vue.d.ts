/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import { EPanelTitle, EDigitalPanel, EDialog } from "../lib/ehl-ui"
  const component: DefineComponent<{}, {}, any>
  export default component
}
