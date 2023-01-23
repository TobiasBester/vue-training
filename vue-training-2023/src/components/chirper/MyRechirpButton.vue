<template>
  <v-btn
    id="rechirp-btn"
    prepend-icon="mdi-repeat-variant"
    :color="rechirpBtnColor"
    @click="toggleRechirp"
  >
    {{ data.numRechirps || 'Rechirp' }}
  </v-btn>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";

const data = reactive({
  numRechirps: 2,
  hasRechirped: false,
})

const rechirpBtnColor = computed(() => whiteOrAccent(data.hasRechirped))

const whiteOrAccent = (val: boolean) => val ? 'white' : 'accent'

const toggleRechirp = () => {
  if (!data.hasRechirped) {
    data.hasRechirped = true
    data.numRechirps += 1
  } else {
    data.hasRechirped = false
    data.numRechirps -= 1
  }
}
</script>

<style scoped>

</style>
