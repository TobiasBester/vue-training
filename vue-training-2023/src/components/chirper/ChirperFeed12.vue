<template>
  <v-container fluid>
    <!-- New Chirp Textarea -->
    <v-row id="new-chirp-card" justify="center">
      <v-col md="8" cols="11" class="justify-center">
        <v-textarea
          v-model="data.newChirpContent"
          id="new-chirp-textarea"
          rows="3"
          label="Vibe Check"
          :error-messages="newChirpFieldErrorMessages"
        />
      </v-col>
      <v-col md="6" cols="10" class="justify-center text-center">
        <v-btn
          v-if="data.newChirpContent.length > 0 && !data.isReplying"
          color="accent"
        >
          Send Chirp 🐦
        </v-btn>
      </v-col>
    </v-row>

    <!-- Chirps -->
    <v-row justify="center">
      <v-col
        v-for="(chirp, idx) in data.allChirps"
        md="10"
        cols="12"
        :key="idx"
      >
        <chirp-feed-card v-bind="chirp" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, watch} from "vue";
import ChirpFeedCard from "@/components/chirper/ChirpFeedCard.vue";
import {FeedChirp, fetchChirps} from "@/data/api";

const MAX_CHIRP_LENGTH = 140
const MAX_LENGTH_ERROR_MSG = `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} characters`

const data = reactive({
  newChirpContent: '',
  allChirps: [] as FeedChirp[]
})

const newChirpFieldErrorMessages = computed(() => getChirpLengthErrorMessages(data.newChirpContent.length))

const getChirpLengthErrorMessages = (chirpLength: number) => {
  if (chirpLength > MAX_CHIRP_LENGTH) {
    return `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} chars`
  }
  return []
}

// TODO: 12 - Process the reply from the ChirpFeedCard's send-reply event and push it to the
//            chirp's replies array

watch(() => data.newChirpContent.length, (newVal) => {
  if (newVal > MAX_CHIRP_LENGTH) {
    alert(MAX_LENGTH_ERROR_MSG)
  }
})

onMounted(() => {
  // Pretend we're fetching chirps from our backend
  data.allChirps = [...fetchChirps()]
})

</script>

<style scoped>

</style>
