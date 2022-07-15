<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <e-panel-title title="标题"/>
  <e-digital-panel value="999"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EDigitalPanel from "@/components/EDigitalPanel"

export default defineComponent({
  name: 'App',
  components: {
    EDigitalPanel
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
