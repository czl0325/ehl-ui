<template>
  <div ref="container" class="progress-container">
    <canvas ref="progress"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, watch, ref } from 'vue'

export default defineComponent({
  name: 'EPie',
  props: {
    numbers: {
      type: Array as PropType<number[]>,
      default: () => [ 50, 50 ]
    },
    colors: {
      type: Array as PropType<string[]>,
      default: () => [ "#1890FF", "#FFC000" ]
    }
  },
  setup(props) {
    let totalWidth = 0
    let totalHeight = 0
    const container = ref({} as HTMLElement)
    const progress = ref<any>(null)
    const draw = () => {
      for (let i = 0; i < props.numbers?.length; i++) {
        const number = props.numbers[i]
        if (isNaN(number)) {
          return
        }
      }
      if (container.value && progress.value) {
        totalWidth = container.value.offsetWidth
        totalHeight = container.value.offsetHeight
        progress.value.width = totalWidth
        progress.value.height = totalHeight
        const ctx = progress.value.getContext("2d")
        const pieChart = () => {
          let start = 0
          let end = 0
          ctx.clearRect(0, 0, totalWidth, totalHeight)
//          ctx.fillStyle = "red"
//          ctx.fillRect(0, 0, 18, 18)
          for (let i = 0; i < props.numbers.length; i++) {
            ctx.beginPath()
            ctx.moveTo(totalWidth / 2, totalHeight / 2)
            end += (props.numbers[i] / 100) * Math.PI * 2
            // ctx.strokeStyle = "white"
            ctx.fillStyle = props.colors[i]
            ctx.arc(totalWidth / 2, totalHeight / 2, totalWidth / 2, start, end)
            ctx.fill()
            ctx.closePath()
            // ctx.stroke()
            start += (props.numbers[i] / 100) * Math.PI * 2
          }
        }
        pieChart()
      }
    }
    onMounted(() => {
      draw()
    })
    watch(() => props.numbers, (val) => {
      draw()
    }, {
      deep: true,
      immediate: true
    })
    return {
      container,
      progress
    }
  }
})
</script>

<style scoped>
.progress-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
