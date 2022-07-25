<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <e-panel-title title="标题"/>
  <e-digital-panel value="999"/>
  <e-pie style="width: 40px;height: 40px" v-for="index in [1,2,3,4]" :key="index" :numbers="[index*10, 100-index*10]"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EPanelTitle from "@/components/EPanelTitle"
import EDigitalPanel from "@/components/EDigitalPanel"
import EPie from "@/components/EPie"

export default defineComponent({
  name: 'App',
  components: {
    EDigitalPanel,
    EPanelTitle,
    EPie
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
