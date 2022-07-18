# ehl-ui

### 安装

`npm i ehl-ui -S`<br>
当前版本0.1.1

### 组件介绍

##### EPanelTitle

通用title标题


|    属性名    |   属性作用    |  属性类型   |
|:---------:|:---------:|:-------:|
|   title   |    标题     | String  |
|   icon    |    图标     | String  |
| underline |  是否带下划线   | Boolean |
| noPadding | 取消padding | Boolean |


##### EDialog

封装ElDialog对话框

|      属性名       |       属性作用       |  属性类型   |
|:--------------:|:----------------:|:-------:|
|   showFooter   |    是否显示footer    | Boolean |
| closeOnConfirm |   点击确定时候关闭对话框    | Boolean |
|   noPadding    | 对话框body取消padding | Boolean |

##### EDigitalPanel

数字滚动效果的组件

|  属性名  | 属性作用 |      属性类型      |
|:-----:|:----:|:--------------:|
| value | 数字的值 | String, Number |
| color |  颜色  |     String     |
