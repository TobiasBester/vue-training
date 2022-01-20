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
      v-model="outValue"
      @input="onInput"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps ({
    modelValue: {
      type: String
    },
    label: {
      type: String,
      required: true
    }
  })
  const emit = defineEmits(['update:modelValue'])

  const outValue = ref(props.modelValue)

  const onInput = (_) => {
    emit('update:modelValue', outValue)
  }

</script>

<style scoped>

</style>
