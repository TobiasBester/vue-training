<template>
  <v-btn
    id="fave-btn"
    prepend-icon="mdi-star"
    :color="faveBtnColor"
    @click="toggleFave"
  >
    {{ data.numFaves || 'Fave' }}
  </v-btn>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";

const data = reactive({
  numFaves: 2,
  hasFaved: false,
})

const faveBtnColor = computed(() => whiteOrAccent(data.hasFaved))

const whiteOrAccent = (val: boolean) => val ? 'white' : 'accent'

const toggleFave = () => {
  if (!data.hasFaved) {
    data.hasFaved = true
    data.numFaves += 1
  } else {
    data.hasFaved = false
    data.numFaves -= 1
  }
}
</script>

<style scoped>

</style>
