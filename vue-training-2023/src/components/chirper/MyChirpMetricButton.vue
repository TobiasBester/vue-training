<template>
  <v-btn
    :prepend-icon="icon"
    :color="btnColor"
    @click="toggleAction"
    :size="$vuetify.display.smAndDown ? 'small' : 'default'"
  >
    {{ data.numUnits || text }}
  </v-btn>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: 'mdi-star',
    validator: (v: string) => v.startsWith('mdi-'),
  },
  text: {
    type: String,
    required: true,
  }
})

const randomNumUnits = () => {
  const MAX_NUM_UNITS = 100
  const PERCENT_CHANCE_OF_ZERO_UNITS = 0.3
  return Math.random() < PERCENT_CHANCE_OF_ZERO_UNITS
    ? 0
    : Math.floor(Math.random() * MAX_NUM_UNITS)
}

const data = reactive({
  numUnits: randomNumUnits(),
  hasClicked: false,
})

const btnColor = computed(() => whiteOrAccent(data.hasClicked))

const whiteOrAccent = (val: boolean) => val ? 'white' : 'accent'

const toggleAction = () => {
  if (!data.hasClicked) {
    data.hasClicked = true
    data.numUnits += 1
  } else {
    data.hasClicked = false
    data.numUnits -= 1
  }
}
</script>

<style scoped>

</style>
