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
          @click="addNewChirp"
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
        <my-chirp-feed-card v-bind="chirp" @send-reply="(val) => addReply(val, chirp)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive, watch} from "vue";
import {createNewChirp, FeedChirp, fetchChirps} from "@/data/api";
import MyChirpFeedCard from "@/components/chirper/MyChirpFeedCard.vue";
import {useAppStore} from "@/store/app";
import useLocalStorage from "@/composables/useLocalStorage";

const MAX_CHIRP_LENGTH = 140
const MAX_LENGTH_ERROR_MSG = `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} characters`

const { currentProfile } = useAppStore()
const { getItem: getChirps, setItem: setChirps } = useLocalStorage('chirps')

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

const addReply = (replyVal: string, chirp: FeedChirp) => {
  chirp.replies.push({
    id: chirp.replies.length + 1,
    content: replyVal
  })
  // setChirps(data.allChirps)
}

const addNewChirp = () => {
  data.allChirps.push(createNewChirp(data.newChirpContent, currentProfile.username))
  data.newChirpContent = ''
}

watch(() => data.newChirpContent.length, (newVal) => {
  if (newVal > MAX_CHIRP_LENGTH) {
    alert(MAX_LENGTH_ERROR_MSG)
  }
})

const setChirpsFromApi = () => {
  // Pretend we're fetching chirps from our backend
  data.allChirps = [...fetchChirps()]
}

const setChirpsFromLocalStorage = () => {
  const storageChirps = getChirps()

  if (Object.keys(storageChirps).length === 0) {
    data.allChirps = [...fetchChirps()]
    setChirps(data.allChirps)
    return
  }

  data.allChirps = storageChirps as FeedChirp[]
}

onMounted(() => {
  setChirpsFromApi()
  // setChirpsFromLocalStorage()
})

</script>

<style scoped>

</style>
