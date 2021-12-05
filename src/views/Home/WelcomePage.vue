<template>
  <div class="h-full">
    <div
      class="home_container flex justify-center items-center flex-col text-[#666] h-full transition-all">
      <div class="date-box">
        {{dateStr}}
      </div>
      <div class="bottom_wrapper">
        <div class="time-box">
          {{timeStr}}
        </div>
        <div class="clock">
          <div class="clock-face">
            <div class="hand hour-hand" :style="{transform:`rotate(${hourDeg}deg)`}"></div>
            <div ref="minHand" class="hand min-hand" :style="{transform:`rotate(${minDeg}deg)`}">
            </div>
            <div ref="secHand" class="hand second-hand"
              :style="{transform:`rotate(${secondDeg}deg)`}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
const dateStr = ref('') // 日期的文字
const timeStr = ref('') // 时间的文字
const secondDeg = ref(0) // 秒针转动角度
const minDeg = ref(0) // 分针转动角度
const hourDeg = ref(0) // 时针转动角度
const secHand = ref() // 秒针ref
const minHand = ref() // 分针ref
const timer = ref(null)
const weekMap = new Map([
  [0, '周日'],
  [1, '周一'],
  [2, '周二'],
  [3, '周三'],
  [4, '周四'],
  [5, '周五'],
  [6, '周六']
])
const setText = () => { // 文字变化
  dateStr.value = `${dayjs().format('MM月DD日')} · ${weekMap.get(dayjs().day())}`
  timeStr.value = dayjs().format('HH:mm:ss')
}
const setDate = () => { // 时钟转动
  const second = dayjs().second()
  const min = dayjs().minute()
  const hour = dayjs().hour()
  secondDeg.value = (90 + (second / 60) * 360)
  minDeg.value = (90 + (min * 60 + second) * 0.1)
  hourDeg.value = (90 + (hour / 12) * 360 + (min / 12 / 60) * 360)
  // 解决指针跳顿问题，在发生跳顿的角度值处，将 CSS 的 `transition` 属性去掉
  secHand.value.style.transition = secondDeg.value === 90
    ? 'all 0s'
    : 'all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)'

  minHand.value.style.transition = minDeg === 90
    ? 'all 0s'
    : 'all 0.1s cubic-bezier(0.9, 0.54, 0.26, 1.68)'
}
const renderTime = () => {
  setText()
  setDate()
}
onMounted(() => {
  renderTime()
  timer.value = setInterval(() => {
    renderTime()
  }, 100)
})
onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.home_container {
  text-shadow: -1px 4px 6px #00000030;
}

.date-box,
.time-box {
  @apply text-[120px] select-none leading-normal transition-all text-center;
}

.time-box {
  @apply text-[150px] mr-70px;
}

/* 时钟部分 */
.clock {
  @apply w-240px h-240px my-0 mx-auto relative rounded-full;
  border: 8px solid #666;
  box-shadow: 0 1px 8px rgb(34 34 34 / 30%), inset 0 1px 8px rgb(34 34 34 / 30%);
}

.clock-face {
  @apply relative w-full h-full;
  &:after {
    @apply w-12px h-12px top-1/2 left-1/2 absolute block bg-[#666] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-4;
    content: "";
    box-shadow: 0 0 10px -3px #a2a2a2;
  }
}

.hand {
  @apply w-1/2 absolute bg-[#666] top-1/2 right-1/2 rotate-90;
  transform-origin: 100% 50%;
  transition-timing-function: cubic-bezier(0.9, 0.54, 0.26, 1.68);
  box-shadow: 0 1px 8px rgb(34 34 34 / 30%);
}

.hour-hand {
  @apply w-0 h-0 absolute z-1 top-1/2 left-1/2 bg-[#666];
  margin: -4px 0 -4px -25%;
  padding: 4px 0 4px 25%;
  transform-origin: 100% 50%;
  border-radius: 4px 0 0 4px;
}

.min-hand {
  @apply z-2 w-[45%] h-5px -mt-2.5px;
  border-radius: 4px 0 0 4px;
  transition: all 0.1s cubic-bezier(0.9, 0.54, 0.26, 1.68);
}

.second-hand {
  @apply z-3 h-2px w-2/5 h-2px -mt-1px bg-[#666];
  transition: all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68);
}

.bottom_wrapper {
  @apply flex items-center;
}
</style>
