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
      <v-col md="10" cols="12">
        <v-card class="my-2" color="secondary">
          <v-card-title>@{{ data.author }}</v-card-title>
          <v-card-text>
            {{ data.content }}
          </v-card-text>

          <!-- Chirp actions -->
          <v-card-actions>
            <v-btn
              :icon="data.isReplying ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              color="accent"
              @click="data.isReplying = !data.isReplying"
            />
            <v-btn
              id="reply-btn"
              prepend-icon="mdi-message"
              :color="replyBtnColor"
              @click="data.isReplying = true"
            >
              {{ numReplies > 0 ? numReplies : 'Reply' }}
            </v-btn>
            <v-btn
              id="rechirp-btn"
              prepend-icon="mdi-repeat-variant"
              :color="rechirpBtnColor"
              @click="toggleRechirp"
            >
              {{ data.numRechirps || 'Rechirp' }}
            </v-btn>
            <v-btn
              id="fave-btn"
              prepend-icon="mdi-star"
              :color="faveBtnColor"
              @click="toggleFave"
            >
              {{ data.numFaves || 'Fave' }}
            </v-btn>
          </v-card-actions>

          <!-- Chirp Reply card -->
          <v-card v-if="data.isReplying" id="reply-card" color="primary">
            <!-- Chirp Replies list -->
            <v-list v-if="data.replies.length > 0" id="replies-list" class="bg-accent">
              <v-list-item
                v-for="reply in data.replies"
                color="secondary"
                :key="reply.id"
              >
                Reply {{ reply.id }}: {{ reply.content }}
              </v-list-item>
            </v-list>

            <v-card-text>
              <v-textarea
                v-model="data.reply"
                id="reply-textarea"
                rows="2"
                :label="`Reply to ${data.author}`"
                :error-messages="replyFieldErrorMessages"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn
                variant="outlined"
                :disabled="data.reply.length === 0 || data.reply.length > MAX_CHIRP_LENGTH"
                @click="sendReply"
              >
                Send Reply
              </v-btn>
              <v-btn @click="data.isReplying = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, reactive, watch} from "vue";

type ChirpReply = { id: number, content: string }

const MAX_CHIRP_LENGTH = 140
const MAX_LENGTH_ERROR_MSG = `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} characters`

// TODO: 9 - Create two new components, MyRechirpButton.vue and MyFaveButton.vue
// TODO: 9 - Move the template for the buttons and place it in the respective component
// TODO: 9 - Move the rechirpBtnColor, toggleRechirp, and numRechirps variables to RechirpButton
//            and the same for FaveButton
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr',
  author: 'ChirpUser',
  numRechirps: 2,
  numFaves: 4,
  hasRechirped: false,
  hasFaved: false,
  newChirpContent: '',
  isReplying: false,
  reply: '',
  replies: [] as ChirpReply[],
})

const numReplies = computed(() => data.replies.length)
const replyBtnColor = computed(() => whiteOrAccent(data.isReplying))
const rechirpBtnColor = computed(() => whiteOrAccent(data.hasRechirped))
const faveBtnColor = computed(() => whiteOrAccent(data.hasFaved))

const newChirpFieldErrorMessages = computed(() => getChirpLengthErrorMessages(data.newChirpContent.length))
const replyFieldErrorMessages = computed(() => getChirpLengthErrorMessages(data.reply.length))

const getChirpLengthErrorMessages = (chirpLength: number) => {
  if (chirpLength > MAX_CHIRP_LENGTH) {
    return `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} chars`
  }
  return []
}

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

const toggleFave = () => {
  if (!data.hasFaved) {
    data.hasFaved = true
    data.numFaves += 1
  } else {
    data.hasFaved = false
    data.numFaves -= 1
  }
}

const sendReply = () => {
  data.replies.push({
    id: data.replies.length + 1,
    content: data.reply
  })
  data.reply = ''
}

watch(() => data.reply.length, (newVal) => {
  if (newVal > MAX_CHIRP_LENGTH) {
    alert(MAX_LENGTH_ERROR_MSG)
  }
})

watch(() => data.newChirpContent.length, (newVal) => {
  if (newVal > MAX_CHIRP_LENGTH) {
    alert(MAX_LENGTH_ERROR_MSG)
  }
})

console.log('1: On created')

onMounted(() => console.log('3: On mounted'))
onUnmounted(() => console.log('4: On unmounted'))

console.log('2: On created')

</script>

<style scoped>

</style>
