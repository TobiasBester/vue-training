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
            <rechirp-button />
            <fave-button />
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
import RechirpButton from "@/components/chirper/MyRechirpButton.vue";
import FaveButton from "@/components/chirper/MyFaveButton.vue";

type ChirpReply = { id: number, content: string }

const MAX_CHIRP_LENGTH = 140
const MAX_LENGTH_ERROR_MSG = `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} characters`

// TODO: 10 - Create component MyChirpMetricButton.vue to be a generic version of Rechirp- and FaveButton
//             with props for the button icon and button default text
// TODO: 10 - In this component, add new button to the right of faves with text Like and icon 'mdi-heart'
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr',
  author: 'ChirpUser',
  newChirpContent: '',
  isReplying: false,
  reply: '',
  replies: [] as ChirpReply[],
})

const numReplies = computed(() => data.replies.length)
const replyBtnColor = computed(() => whiteOrAccent(data.isReplying))

const newChirpFieldErrorMessages = computed(() => getChirpLengthErrorMessages(data.newChirpContent.length))
const replyFieldErrorMessages = computed(() => getChirpLengthErrorMessages(data.reply.length))

const getChirpLengthErrorMessages = (chirpLength: number) => {
  if (chirpLength > MAX_CHIRP_LENGTH) {
    return `Chirp cannot be longer than ${MAX_CHIRP_LENGTH} chars`
  }
  return []
}

const whiteOrAccent = (val: boolean) => val ? 'white' : 'accent'

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
