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
              :color="data.isReplying ? 'white' : 'accent'"
              @click="data.isReplying = true"
            >
              {{ data.numReplies > 0 ? data.numReplies : 'Reply' }}
            </v-btn>
            <v-btn
              id="rechirp-btn"
              prepend-icon="mdi-repeat-variant"
              :color="data.hasRechirped ? 'white' : 'accent'"
              @click="toggleRechirp"
            >
              {{ data.numRechirps || 'Rechirp' }}
            </v-btn>
            <v-btn
              id="fave-btn"
              prepend-icon="mdi-star"
              :color="data.hasFaved ? 'white' : 'accent'"
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
              />
            </v-card-text>
            <v-card-actions>
              <v-btn
                variant="outlined"
                :disabled="data.reply.length === 0"
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
import {reactive} from "vue";

type ChirpReply = { id: number, content: string }

// TODO: 7 - Replace the `numReplies` data value with a computed value based on the `replies` value
// TODO: 7 - Extract the bindings for the colors of the Reply, Rechirp, and Fave button into computed values
//            Remember to use .value to reference other computed values
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr',
  author: 'ChirpUser',
  numReplies: 0,
  numRechirps: 2,
  numFaves: 4,
  hasRechirped: false,
  hasFaved: false,
  newChirpContent: '',
  isReplying: false,
  reply: '',
  replies: [] as ChirpReply[],
})

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
  data.numReplies += 1
}

</script>

<style scoped>

</style>
