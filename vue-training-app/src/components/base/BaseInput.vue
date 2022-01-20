<template>
  <div>
    <label for="base-input" class="sr-only">
      {{ label }}
    </label>
    <input
      id="base-input"
      type="text"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :placeholder="label"
      :value="outValue"
      @input="$emit('input', outValue)"
    />
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const props = defineProps ({
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    }
  })

  const outValue = ref(props.value)

  watch(props, ({ value }) => {
    outValue.value = value
  })
</script>

<style scoped>

</style>
