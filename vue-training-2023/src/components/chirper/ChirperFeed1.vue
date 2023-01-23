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
            <v-btn id="reply-btn" prepend-icon="mdi-message">0</v-btn>
            <v-btn id="rechirp-btn" prepend-icon="mdi-repeat-variant">5</v-btn>
            <v-btn id="fave-btn" prepend-icon="mdi-star">4</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {reactive} from "vue";

// TODO: 1 - Add the following properties to the data object: `numReplies`, `numRechirps`, `numFaves`
// TODO: 1 - Then, display the newly added values on their corresponding buttons, replacing the hard-coded numbers
// TODO: 1 - Only display a number if it is more than zero, else, display the associated action, namely:
//            'Reply', 'Rechirp', and 'Fave'
const data = reactive({
  content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr 😮',
  author: 'ChirpLover421',
})
</script>

<style scoped>

</style>
