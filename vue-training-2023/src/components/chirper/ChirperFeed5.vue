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
        <v-btn color="accent">Send Chirp 🐦</v-btn>
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
          <v-card-actions>
            <v-btn
              id="reply-btn"
              prepend-icon="mdi-message"
              :color="data.numReplies > 0 ? 'white' : 'accent'"
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
          <v-card id="reply-card" color="primary">
            <v-card-text>
              <v-textarea
                id="reply-textarea"
                rows="2"
                :label="`Reply to ${data.author}`"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn variant="outlined">Send Reply</v-btn>
              <v-btn>Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {reactive} from "vue";

// TODO: 5 - Add new data value called isReplying set to false
// TODO: 5 - Add onClick event to Reply button which sets isReplying to true
// TODO: 5 - Only render reply-card if isReplying is true
// TODO: 5 - Only render "Send Chirp" button if newChirpContent has at least one character AND
//            if isReplying is false
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr',
  author: 'ChirpUser',
  numReplies: 0,
  numRechirps: 2,
  numFaves: 4,
  hasRechirped: false,
  hasFaved: false,
  newChirpContent: '',
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

</script>

<style scoped>

</style>
