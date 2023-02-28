<template>
  <el-dialog v-model="visible" append-to-body destroy-on-close width="80%" align-center :class="noPadding?'dialog-nopadding':'dialog-container'" top="0" v-bind="$attrs" :close-on-click-modal="false">
    <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
      <slot :name="key"></slot>
    </template>
    <template #footer>
      <el-button v-if="showFooter" @click="visible=false">取消</el-button>
      <el-button v-if="showFooter" type="primary" @click="onConfirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, watch, toRefs, reactive } from 'vue'

export interface DialogElement extends HTMLElement {
  confirm: () => Promise<any>
}

export default defineComponent({
  name: 'EDialog',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    closeOnConfirm: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  emits: ['ok'],
  setup (props, context) {
    const { modelValue } = toRefs(props)
    const state = reactive({
      visible: modelValue.value
    })
    watch(modelValue, (val) => {
      state.visible = val
    }, { immediate: true })
    const onConfirm = () => {
      if (props.closeOnConfirm) {
        state.visible = false
      }
      context.emit('ok')
    }
    return {
      ...toRefs(state),
      onConfirm
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
