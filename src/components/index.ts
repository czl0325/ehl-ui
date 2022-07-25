import EPanelTitle from './EPanelTitle/index'
import EDigitalPanel from "./EDigitalPanel/index"
import EDialog from "./EDialog/index"
import EPie from "./EPie/index"

const components = [
  EPanelTitle,
  EDigitalPanel,
  EDialog,
  EPie
]

const install: any = function(Vue: any) {
  // 判断是否安装
  if (install.installed)
    return
  components.map(component => {
    Vue.component(component.name, component )
  })
  // 判断是否是直接引入文件
  if (typeof window !== "undefined" && (window as any).Vue) {
    install((window as any).Vue)
  }
}
export {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  EPanelTitle,
  EDigitalPanel,
  EDialog,
  EPie
}
