<template>
  <div class="p-4 m-4" :class="bgColor">
    <div class="text-6xl text-black">{{ letter }}</div>
  </div>
</template>

<script setup>
  import { computed, onUnmounted } from 'vue'

  const props = defineProps({
    letter: {
      type: String,
      validator: (val) => ['L', 'D', 'R'].includes(val),
    }
  })
  const emit = defineEmits(['correct', 'incorrect'])

  const bgColor = computed(() => {
    switch (props.letter) {
      case 'L': return 'bg-lime-500'
      case 'D': return 'bg-blue-500'
      default: return 'bg-purple-500'
    }
  })

  const relevantKeys = ['ArrowLeft', 'ArrowDown', 'ArrowRight']

  const correctKey = computed(() => {
    switch (props.letter) {
      case 'L': return 'ArrowLeft'
      case 'D': return 'ArrowDown'
      default: return 'ArrowRight'
    }
  })

  const keyPressHandler = (e) => {
    if (relevantKeys.includes(e.key)) {
      e.key === correctKey.value
        ? emit('correct')
        : emit('incorrect')
    }
  }

  window.addEventListener('keydown', keyPressHandler)

  onUnmounted(() => {
    window.removeEventListener('keydown', keyPressHandler)
  })
</script>

<style scoped>

</style>
