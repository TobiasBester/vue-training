<template>
  <button
    class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
    :class="`${colorClasses} ${focus ? 'focus:outline-none focus:ring-2 focus:ring-offset-2' : ''}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    color: {
      type: String,
      default: 'red'
    },
    focus: {
      type: Boolean,
      default: false
    }
  })

  const colorClasses = computed(() => {
    switch (props.color) {
      case 'red':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
      case 'green':
        return 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
      default:
        return 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500'
    }
  })
</script>

<style scoped>

</style>
