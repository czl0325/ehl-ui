<template>
  <div class="list-box" :style="{ color: `${color}` }">
    <div class="num-container" :style="{border: `1px solid ${color}`}" v-for="(item, index) of showList" :key="index">
      <div class="number-box"
           :style="{ transform: 'translateY(' + -item.curr * 100 + '%)', transitionDuration: '1s'}">
        <template v-if="item.list">
          <div class="number" v-for="node of item.list" :key="node">{{ node }}</div>
        </template>
        <div class="number" v-else>{{ item.curr }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'

export interface DigitalInfo {
  curr: number;
  list: number[];
}

export default defineComponent({
  name: 'EDigitalPanel',
  props: {
    value: {
      type: [String, Number]
    },
    color: {
      type: String,
      default: "#42FFE7"
    }
  },
  setup (props) {
    const showList = ref<DigitalInfo[]>([])
    const defaultNumber = ref<DigitalInfo[]>([])
    const numberList = ref<DigitalInfo[]>([])
    const deepClone = (data: any) => {
      let newData: any = null
      if (typeof data === 'object') {
        newData = Array.isArray(data) ? [] : {}
      } else {
        return data
      }
      Object.keys(data).forEach(key => {
        newData[key] = deepClone(data[key])
      })
      return newData
    }
    const initData = () => {
      let num = 0
      if (typeof props.value === "string") {
        num = parseInt(props.value)
      } else {
        num = Math.floor(props.value as number)
      }
      const arr = Array.from(num.toString()).map((item: any) => {
        if (isNaN(item)) {
          return { curr: item }
        } else {
          return {
            curr: +item,
            list: new Array(10).fill(null).map((node, index) => index)
          }
        }
      })
      numberList.value = deepClone(arr)
      defaultNumber.value = deepClone(arr).map((item: any) => {
        if (item.list) {
          item.curr = 0
        }
        return item
      })
      start()
    }
    const start = () => {
      showList.value = deepClone(defaultNumber.value)
      setTimeout(() => {
        showList.value = deepClone(numberList.value)
      })
    }
    onMounted(() => {
      initData()
    })
    watch(() => props.value, (val) => {
      initData()
    })
    return {
      showList,
      defaultNumber,
      numberList
    }
  }
})
</script>

<style lang="scss" scoped>
.list-box {
  display: flex;
  overflow: hidden;
  height: 26px;
  font-size: 20px;
  box-sizing: border-box;
}
.num-container {
  width: 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &:nth-child(n+2) {
    margin-left: 1px;
  }
}
.number-box {
  width: 26px;
  height: 26px;
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform;
  transition-timing-function: cubic-bezier(1, 0.6, 0.6, 1);
}
.number {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
