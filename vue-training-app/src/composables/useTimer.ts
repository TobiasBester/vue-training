import { ref } from 'vue';

const timeRemaining = ref(0)

export default function useTimer (countDown: number) {
  let timer: any = null

  const countDownTimer = () => {
    if (timeRemaining.value > 0) {
      timer = setTimeout(() => {
        timeRemaining.value -= 1
        countDownTimer()
      }, 1000)
    } else {
      reset()
    }
  }

  const reset = () => {
    timeRemaining.value = countDown
    if (timer) {
      clearTimeout(timer)
    }
  }

  reset()

  return {
    timeRemaining,
    reset,
    countDownTimer
  }
}
