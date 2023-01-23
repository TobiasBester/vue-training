<template>
  <v-container fluid>
    <!-- New Chirp Textarea -->
    <v-row justify="center" no-gutters>
      <v-col md="8" cols="11" class="justify-center">
        <v-textarea rows="3" label="Vibe Check" />
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
              :color="data.numRechirps > 0 ? 'white' : 'accent'"
            >
              {{ data.numRechirps || 'Rechirp' }}
            </v-btn>
            <v-btn
              id="fave-btn"
              prepend-icon="mdi-star"
              :color="data.numFaves > 0 ? 'white' : 'accent'"
            >
              {{ data.numFaves || 'Fave' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {reactive} from "vue";

// TODO: 3 - Add two new data values hasRechirped and hasFaved, both set to false
// TODO: 3 - Add onClick events to the Rechirp and Fave button which TOGGLES the new respective value.
//            It should increment or decrement the numReplies/numFaves value by one
// TODO: 3 - Update the :color binding on the Rechirp and Fave button to be 'white' if
//            hasRechirped/hasFaved is true, else 'accent'
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr',
  author: 'ChirpUser',
  numReplies: 0,
  numRechirps: 2,
  numFaves: 4,
})

</script>

<style scoped>

</style>
