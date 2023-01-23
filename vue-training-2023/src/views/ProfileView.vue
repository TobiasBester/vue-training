<template>
  <h1>Profile Page for {{ currentProfile.username }}</h1>
  <v-text-field
    label="Username"
    v-model="username"
  />
  <v-btn @click="updateUsername">Update Username</v-btn>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/app";
import {ref} from "vue";

const app = useAppStore()

const currentProfile = app.currentProfile
const username = ref(app.currentProfile.username)

const updateUsername = () => {
  app.setNewUsername(username.value)
}
</script>

<style scoped>

</style>
