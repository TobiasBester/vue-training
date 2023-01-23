<template>
  <v-app-bar flat color="primary">
    <template #prepend>
      <v-btn icon="mdi-home" @click="goHome" />
    </template>
    <v-app-bar-title>
      Chirper
    </v-app-bar-title>
    <v-spacer />
    <v-btn prepend-icon="mdi-account" variant="text" to="/profile">
      {{ $vuetify.display.smAndDown ? '' : 'My Profile' }}
    </v-btn>
<!--    <v-btn prepend-icon="mdi-account" variant="text" to="/profile">-->
<!--      {{ $vuetify.display.smAndDown ? '' : currentProfile.username }}-->
<!--    </v-btn>-->
  </v-app-bar>
</template>

<script lang="ts" setup>
  import {useRouter} from "vue-router"
  import {useAppStore} from "@/store/app";

  const router = useRouter()
  const { currentProfile } = useAppStore()
  const goHome = () => router.push({ name: 'Chirper' })
</script>
