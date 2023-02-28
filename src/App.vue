<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <e-panel-title title="标题"/>
  <e-digital-panel value="999"/>
  <e-pie style="width: 40px;height: 40px" v-for="index in [1,2,3,4]" :key="index" :numbers="[index*10, 100-index*10]"/>
  <e-dialog v-model="showDialog" title="测试对话框" no-padding>
    <div style="width: 500px;height: 300px;background-color: aqua">测试对话框</div>
  </e-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EPanelTitle from "@/components/EPanelTitle"
import EDigitalPanel from "@/components/EDigitalPanel"
import EPie from "@/components/EPie"
import EDialog from "@/components/EDialog"

export default defineComponent({
  name: 'App',
  components: {
    EDigitalPanel,
    EPanelTitle,
    EPie,
    EDialog
  },
  setup() {
    const showDialog = ref(true)
    return {
      showDialog
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
