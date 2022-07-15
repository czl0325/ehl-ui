<template>
  <div class="title-container" :style="{borderBottom:underline?'1px solid #ECF0FA':'none', padding:noPadding?'0':'0 20px'}">
    <img v-if="icon" :src="icon" alt="">
    <div v-else class="line" />
    <div class="title">{{ title }}<slot name="subTitle"></slot></div>
    <div style="text-align: right"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EPanelTitle',
  props: {
    title: String,
    icon: {
      type: String,
      default: ""
    },
    underline: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  width: 100%;
  height: 50px;
  img {
    margin-right: 0.5rem;
  }
  .line {
    background-color: #079BFF;
    height: 20px;
    width: 4px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 0.5rem;
  }
  .title {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    flex: 1;
    text-align: left;
    width: 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>
