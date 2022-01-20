<template>
  <header>
    <div class="text-xl">
      <RouterLink class="px-2" to="/">Home</RouterLink>
      <RouterLink class="px-2" to="/about">About</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
